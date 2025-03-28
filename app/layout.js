import { Geist, Geist_Mono, Poppins, Anek_Bangla, Galada } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { ToastWrapper } from "keep-react";
import Footer from "./components/Footer/Footer";
import TanstackProvider from "./components/Provider/TanstackProvider";

const poppin = Poppins({
  subsets: ["latin"],
  weight: '400',
  variable : "--font-english"

})

const banglatext = Anek_Bangla({
  subsets : ["bengali"],
  weight : "400",
  variable : "--font-bangla"
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
  icons: {
    icon: "/mainlogo.png", // Default favicon
    shortcut: "/mainlogo.png",
    apple: "/mainlogo.png", // For Apple devices
  },
  openGraph: {
    title: "Dreamweave Stations",
    description: "Where immagination meets innovations in a tapestry of digital artistry",
    url: "https://dreamweavestations.com/",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co.com/Q7TrjKsn/work1.jpg", // Thumbnail URL
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
        className={`${poppin.variable} ${banglatext.variable}  font-mixed antialiased`}
      >
        <NavigationBar></NavigationBar>
        <div className="p-[-5] ">
          <TanstackProvider>{children}</TanstackProvider>
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
        <Footer></Footer>
      </body>
    </html>
  );
}
