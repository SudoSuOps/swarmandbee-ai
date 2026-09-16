import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://swarmandbee.ai"),
  title: {
    default: "Swarm & Bee | Sovereign AI Infrastructure",
    template: "%s | Swarm & Bee",
  },
  description: "Swarm & Bee builds sovereign AI infrastructure for local MRI workflows, NVIDIA Blackwell compute, edge inference, private data, and verifiable AI jobs.",
  applicationName: "Swarm & Bee",
  authors: [{ name: "Swarm & Bee", url: "https://swarmandbee.ai" }],
  creator: "Swarm & Bee",
  publisher: "Swarm & Bee",
  category: "technology",
  keywords: [
    "sovereign AI infrastructure",
    "edge AI inference",
    "local AI",
    "private medical imaging AI",
    "MRI AI workflow",
    "NVIDIA Blackwell hosting",
    "GPU inference hosting",
    "SwarmMed AI",
    "Jupiter Florida AI",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://swarmandbee.ai",
    siteName: "Swarm & Bee",
    title: "Swarm & Bee | Sovereign AI Infrastructure",
    description: "Local AI infrastructure for medical imaging, GPU compute, edge inference, and private data.",
  },
  twitter: {
    card: "summary",
    title: "Swarm & Bee | Sovereign AI Infrastructure",
    description: "Local AI infrastructure for medical imaging, GPU compute, edge inference, and private data.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://swarmandbee.ai/#organization",
  name: "Swarm & Bee",
  url: "https://swarmandbee.ai",
  email: "build@swarmandbee.ai",
  telephone: "+1-561-532-7120",
  location: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Jupiter", addressRegion: "FL", addressCountry: "US" } },
  sameAs: ["https://huggingface.co/SwarmandBee", "https://github.com/SudoSuOps"],
  knowsAbout: ["Edge AI", "Medical imaging AI", "MRI workflow support", "NVIDIA Blackwell", "Private inference", "Sovereign data infrastructure"],
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}}/>{children}</body></html>
}
