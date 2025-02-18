import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const poppin = Poppins({
  subsets: ["latin"],
  weight: '400'

})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DreamweaveStations",
  description: "where imagination meets innovation in a tapestry of digital artistry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppin.className} antialiased`}
      >
        <NavigationBar></NavigationBar>
        <div className="p-[-5]">
          {children}
        </div>
      </body>
    </html>
  );
}
