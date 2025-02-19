import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { ToastWrapper } from "keep-react";

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
  title: "Dreamweave Stations",
  description: "Where immagination meets innovations in a tapestry of digital artistry",
  openGraph: {
    title: "Dreamweave Stations",
    description: "Where immagination meets innovations in a tapestry of digital artistry",
    url: "https://dreamweavev2.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://dreamweavestations.netlify.app/coordinates.png", // Thumbnail URL
        width: 1200,
        height: 630,
        alt: "Thumbnail Image",
      },
    ],
  },
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
          <ToastWrapper
            richColors={true}
            toastOptions={{
              classNames: {
                title: 'text-body-3 font-medium',
                toast: 'rounded-xl shadow-large',
                description: 'text-body-4 font-normal',
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}
