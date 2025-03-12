import React from 'react'
import OurServices from '../components/OurServices/OurServices'
import Coordinators from '../components/Coordinators/Coordinators'
import ContactUs from '../components/ContactUs/ContactUs'
import logo from "@/public/mainlogo.png"

export const metadata = {
  title: "Dreamweave Stations | Services",
  description: "Where immagination meets innovations in a tapestry of digital artistry",
  openGraph: {
    title: "Dreamweave Stations | Services",
    description: "Where immagination meets innovations in a tapestry of digital artistry",
    url: "https://dreamweavestations.com/services",
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

export default function Services() {
  return (
    <div>
      <div className='my-10'>
        <OurServices></OurServices>
      </div>
      <div>
        <Coordinators></Coordinators>
      </div>
      
    </div>
  )
}
