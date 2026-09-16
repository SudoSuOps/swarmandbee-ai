import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Cpu, Database, HardDrive, Network, ScanLine, ShieldCheck } from "lucide-react";

const systems = [
  { number: "01", title: "MRI intelligence", text: "Private medical imaging workflows built around MONAI, high-memory GPUs, and data that stays under your control.", icon: ScanLine },
  { number: "02", title: "AI hosting", text: "Serious local compute for inference, training, and private workloads—from RTX PRO to dedicated GPU nodes.", icon: Cpu },
  { number: "03", title: "Edge appliances", text: "Purpose-built compute, storage, and networking that puts useful models where the work actually happens.", icon: HardDrive },
  { number: "04", title: "Local data", text: "NAS-first architecture, private networks, and fewer unnecessary cloud dependencies. Your data stays yours.", icon: Database },
];

export default function Home() {
  return <main>
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Swarm and Bee home"><span className="brand-mark">S<span>&amp;</span>B</span><span>swarm <i>&amp;</i> bee</span></a>
      <nav aria-label="Primary navigation"><a href="/swarmmed-ai">SwarmMed AI</a><a href="#systems">Systems</a><a href="#doctrine">Doctrine</a></nav>
      <a className="nav-cta" href="mailto:build@swarmandbee.ai">Start a build <ArrowUpRight size={15}/></a>
    </header>
    <section className="hero" id="top">
      <Image src="/mri-hero.png" alt="Abstract, non-diagnostic MRI scan with compute signal overlays" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-shade"/><div className="hero-grid" aria-hidden="true"/>
      <div className="hero-copy">
        <p className="eyebrow"><span/> Jupiter, Florida · Local AI infrastructure</p>
        <h1>Intelligence<br/>close to <em>the data.</em></h1>
        <p className="hero-lede">Swarm &amp; Bee builds private AI infrastructure—from medical imaging to GPU compute to edge systems.</p>
        <div className="hero-actions"><a className="button-primary" href="mailto:build@swarmandbee.ai">Talk to Swarm &amp; Bee <ArrowUpRight size={18}/></a><a className="text-link" href="#mri">Explore the system <ArrowDownRight size={17}/></a></div>
      </div>
      <div className="hero-status" aria-label="Infrastructure status"><span className="status-dot"/><div><small>PRIVATE INFRASTRUCTURE</small><strong>EDGE / GPU / STORAGE</strong></div><div><small>OPERATING PRINCIPLE</small><strong>LOCAL FIRST</strong></div></div>
    </section>
    <section className="mri-section" id="mri">
      <div className="section-kicker"><span>01</span> MRI intelligence</div>
      <div className="mri-layout"><div><h2>Medical imaging deserves <span>serious infrastructure.</span></h2><p className="section-lede">We are building an MRI intelligence stack around MONAI, local inference, and high-memory GPU systems—so imaging teams can work near their data, not ship it into a black box.</p></div>
        <div className="pipeline" aria-label="MRI inference pipeline"><div className="pipeline-head"><span>LOCAL IMAGING PIPELINE</span><span>PRIVATE BY DESIGN</span></div><div className="pipeline-flow"><div><small>01 / INGEST</small><strong>DICOM</strong><span>Local study intake</span></div><ArrowDownRight aria-hidden="true"/><div><small>02 / COMPUTE</small><strong>MONAI</strong><span>GPU inference</span></div><ArrowDownRight aria-hidden="true"/><div><small>03 / OUTPUT</small><strong>REVIEW</strong><span>Clinician workflow</span></div></div><p>Designed for research and workflow support. Not positioned as a diagnostic medical device.</p></div>
      </div>
    </section>
    <section className="systems-section" id="systems"><div className="section-kicker light"><span>02</span> One infrastructure thesis</div><div className="systems-head"><h2>Built as one system.<br/><span>Not four side projects.</span></h2><p>Compute, storage, networking, and models designed together—with privacy and ownership at the center.</p></div><div className="systems-grid">{systems.map(({number,title,text,icon:Icon})=><article key={number}><div className="card-top"><span>{number}</span><Icon size={24} strokeWidth={1.5}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="edge-section"><div className="edge-visual" aria-label="Edge appliance architecture"><div className="edge-label"><span>SWARM &amp; BEE / EDGE NODE</span><span>LOCAL INFERENCE APPLIANCE</span></div><div className="node-box"><div className="node-glow"/><span>SB–EDGE</span><strong>INTELLIGENCE<br/>WHERE DATA LIVES</strong><div className="node-ports"><i/><i/><i/><i/></div></div><div className="node-specs"><span><Cpu/> Compute</span><span><HardDrive/> Storage</span><span><Network/> Private network</span><span><ShieldCheck/> Local models</span></div></div><div className="edge-copy"><div className="section-kicker"><span>03</span> Edge appliances</div><h2>Put the model where the work happens.</h2><p>Purpose-built appliances combine GPU compute, fast local storage, secure networking, and private models in one deployable system.</p><ul><li>Local inference with predictable performance</li><li>Data ownership without unnecessary transit</li><li>Built for real workloads, not a demo shelf</li></ul></div></section>
    <section className="doctrine" id="doctrine"><div className="section-kicker light"><span>04</span> The doctrine</div><blockquote>“Your data stays <em>yours.</em>”</blockquote><div className="doctrine-row"><p>Local-first storage. Private networks. Edge inference. The cloud is a tool—not the default owner of the relationship.</p><div><small>IDENTITY LAYER</small><strong>swarm&amp;bee</strong><span>ENS / decentralized identity</span></div></div></section>
    <section className="final-cta"><p className="eyebrow"><span/> Systems that respect the data</p><h2>Build local.<br/>Compute <em>anywhere.</em></h2><a href="mailto:build@swarmandbee.ai">build@swarmandbee.ai <ArrowUpRight size={22}/></a></section>
    <footer><span>© 2026 SWARM &amp; BEE</span><span>JUPITER, FLORIDA</span><span>SWARMANDBEE.AI</span></footer>
  </main>;
}
