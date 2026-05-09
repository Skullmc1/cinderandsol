import type { Metadata } from "next";
import { Cinzel_Decorative, Poppins } from "next/font/google";
import "./globals.css";

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
});

const poppins = Poppins({
  weight: ["300","400","600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cinder and Sol",
  description: "An RPG adventure in a scorched, beautiful world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzelDecorative.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
