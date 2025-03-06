import React from 'react'
import OurWorks from '../components/OurWorks/OurWorks'
import CustomerReviews from '../components/CustomerReviews/CustomerReviews'

export const metadata = {
  title: "Dreamweave Stations | Portfolio",
  description: "Look at our previous works",
  openGraph: {
  title: "Dreamweave Stations | Portfolio",
    description: "Look at our previous works",
    url: "https://dreamweavev2.netlify.app/portfolio",
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

export default function Portfolio() {
  return (
    <div>
      <div>
        <OurWorks></OurWorks>
      </div>
      
    </div> 
  )
}
