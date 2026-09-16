import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Cpu, Database, Network, ScanLine, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "SwarmMed AI — Local MRI Intelligence",
  description: "SwarmMed AI brings private MRI intelligence to the edge, powered by local NVIDIA Blackwell compute.",
};

const stages = [
  { n: "01", title: "Ingest", body: "Imaging studies enter a controlled local environment. Source data remains close to the clinical workflow.", icon: Database },
  { n: "02", title: "Analyze", body: "SwarmMed AI processes the study on dedicated edge infrastructure using our trained imaging model.", icon: ScanLine },
  { n: "03", title: "Review", body: "Structured findings and visual references are prepared for qualified clinical review—not autonomous diagnosis.", icon: ShieldCheck },
];

export default function SwarmMedAI() {
  return <main className="med-page">
    <header className="med-nav">
      <Link href="/" className="med-brand"><span className="brand-mark">S<span>&amp;</span>B</span><span>swarm <i>&amp;</i> bee</span></Link>
      <span className="med-product">SWARMMED AI</span>
      <Link href="/" className="med-back"><ArrowLeft size={15}/> Main site</Link>
    </header>

    <section className="med-hero">
      <Image src="/mri-hero.png" alt="Abstract non-diagnostic MRI scan with compute signal overlays" fill priority sizes="100vw" className="med-hero-image"/>
      <div className="med-hero-overlay"/><div className="med-scanline" aria-hidden="true"/>
      <div className="med-hero-copy">
        <p className="eyebrow"><span/> Local MRI intelligence</p>
        <h1>SwarmMed <em>AI</em></h1>
        <p>Private medical imaging intelligence—trained across more than 200,000 images and built to run locally at the edge.</p>
        <a href="#how">See how it works <ArrowUpRight size={18}/></a>
      </div>
      <div className="med-proof">
        <div><strong>200K+</strong><span>TRAINING IMAGES</span></div>
        <div><strong>LOCAL</strong><span>EDGE INFERENCE</span></div>
        <div><strong>BLACKWELL</strong><span>NVIDIA COMPUTE</span></div>
      </div>
    </section>

    <section className="med-intro" id="how">
      <div className="section-kicker"><span>01</span> How it works</div>
      <div className="med-intro-grid"><h2>The model travels to the data.<br/><em>Not the other way around.</em></h2><p>SwarmMed AI combines a purpose-trained imaging model, local edge appliances, and a fleet of high-memory NVIDIA Blackwell systems. The result is a private workflow engineered around speed, control, and human review.</p></div>
      <div className="med-stages">{stages.map(({n,title,body,icon:Icon})=><article key={n}><div><span>{n}</span><Icon size={25} strokeWidth={1.4}/></div><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="med-compute">
      <div className="compute-copy"><div className="section-kicker light"><span>02</span> The compute fleet</div><h2>Blackwell at the core.<br/><em>Edge at the point of care.</em></h2><p>Local appliances handle the immediate workflow. Our NVIDIA Blackwell fleet provides the high-memory compute layer for demanding inference, model development, and controlled private workloads.</p><ul><li><Cpu/> High-memory GPU inference</li><li><Network/> Private network architecture</li><li><Database/> Local-first imaging storage</li><li><ShieldCheck/> Human-reviewed output</li></ul></div>
      <div className="compute-stack"><div className="stack-head"><span>SWARM COMPUTE / ACTIVE FLEET</span><span>LOCAL-FIRST</span></div><div className="gpu-card"><small>NVIDIA</small><strong>BLACKWELL</strong><span>HIGH-MEMORY AI COMPUTE</span><i/></div><div className="stack-flow"><span>EDGE NODE</span><b>→</b><span>PRIVATE NETWORK</span><b>→</b><span>GPU FLEET</span></div></div>
    </section>

    <section className="report-section" id="report">
      <div className="report-copy"><div className="section-kicker"><span>03</span> Sample output</div><h2>A useful first read.<br/><em>A clinician makes the call.</em></h2><p>SwarmMed AI organizes imaging observations into a concise, reviewable format. Every output is traceable to the study and clearly presented as decision support.</p><div className="report-note"><ShieldCheck/><span><strong>Clinical review required</strong>This synthetic example is for product demonstration only. It is not a diagnosis or real patient report.</span></div></div>
      <article className="sample-report">
        <header><div><small>SWARMMED AI / SAMPLE REPORT</small><strong>MR BRAIN · DEMONSTRATION</strong></div><span>SYNTHETIC</span></header>
        <div className="report-meta"><span><small>STUDY ID</small>DEMO-000247</span><span><small>MODEL STATUS</small>PROCESSING COMPLETE</span><span><small>REVIEW</small>REQUIRED</span></div>
        <section><h3>Study context</h3><p>Synthetic non-contrast brain MRI prepared to demonstrate the structure of a SwarmMed AI output. No patient data is represented.</p></section>
        <section><h3>AI-assisted observations</h3><ul><li><Check/> Image series passed automated quality checks for demonstration processing.</li><li><Check/> No simulated acute intracranial abnormality flagged in this sample.</li><li><Check/> Mild synthetic nonspecific white-matter signal changes noted for reviewer attention.</li></ul></section>
        <section><h3>Draft impression</h3><ol><li>No simulated acute intracranial finding identified.</li><li>Mild synthetic nonspecific white-matter signal changes.</li><li>Final interpretation must be completed by a qualified clinician.</li></ol></section>
        <footer><span>Generated locally at the edge</span><strong>NOT FOR CLINICAL USE</strong></footer>
      </article>
    </section>

    <section className="med-cta"><p className="eyebrow"><span/> Bring intelligence closer</p><h2>Private by design.<br/><em>Powerful by build.</em></h2><a href="mailto:build@swarmandbee.ai">Build with SwarmMed AI <ArrowUpRight/></a></section>
    <footer className="med-footer"><span>© 2026 SWARM &amp; BEE</span><span>SWARMMED AI · RESEARCH &amp; WORKFLOW SUPPORT</span><span>BUILD@SWARMANDBEE.AI</span></footer>
  </main>;
}
