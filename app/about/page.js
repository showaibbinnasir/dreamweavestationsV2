import React from 'react'
import ContactUs from '../components/ContactUs/ContactUs'
export const metadata = {
  title: "Dreamweave Stations | About",
  description: "Lets meet with the coordinators",
  openGraph: {
    title: "Dreamweave Stations | About",
    description: "Lets meet with the coordinators",
    url: "https://dreamweavestations.com/about",
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

export default function About() {
  return (
    <div><div>
            <ContactUs></ContactUs>
          </div></div>
  )
}
