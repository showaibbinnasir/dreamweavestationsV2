import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'

export const metadata = {
  title: "Dreamweave Stations | Contanct",
  description: "Get in touch with us",
  openGraph: {
  title: "Dreamweave Stations | Contact",
    description: "Get in touch with us",
    url: "https://dreamweavestations.com/contact",
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

export default function Contact() {
  return (
    <div>
      <ContactForm></ContactForm>
    </div>
  )
}
