import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Outfit({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Playstudy",
  description: "Learning the new way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
        {children}
      </body>
    </html>
  );
}
