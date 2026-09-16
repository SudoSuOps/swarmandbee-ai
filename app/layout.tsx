import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Swarm & Bee — Local AI Infrastructure", description:"Private AI infrastructure for MRI intelligence, GPU hosting, edge appliances, and local data.", metadataBase:new URL("https://swarmandbee.ai"), alternates:{canonical:"/"}, icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
