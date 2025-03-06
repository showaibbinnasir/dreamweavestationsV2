import React from 'react'
import AffiliatedProgram from '../components/AffiliatedProgram/AffiliatedProgram'
import OurProducts from '../components/OurProducts/OurProducts'

export const metadata = {
    title: "Dreamweave Stations | Products",
    description: "Look at our Products",
    openGraph: {
    title: "Dreamweave Stations | Products",
      description: "Look at our Products",
      url: "https://dreamweavev2.netlify.app/products",
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

export default function Products() {
    return (
        <div>
            <div>
                <div>
                    <OurProducts></OurProducts>
                </div>
            </div>
            <div>
                <AffiliatedProgram></AffiliatedProgram>
            </div>
        </div>
    )
}
