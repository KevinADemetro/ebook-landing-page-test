import { Playfair_Display, Lato } from "next/font/google";
import "@/app/_styles/globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata = {
  title: "Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} text-[#202730]`}
      >
        {children}
      </body>
    </html>
  );
}
