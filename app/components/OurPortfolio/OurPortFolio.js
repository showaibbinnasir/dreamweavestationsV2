import React from 'react'
import GradientText from '../GradientText/GradientText'
import haya from "@/public/work1.jpg"
import cozy from "@/public/work2.jpg"
import Noman from "@/public/work3.jpg"
import china from "@/public/work4.jpg"
import sports from "@/public/work5.jpg"
import nextGen from "@/public/work6.jpg"
import Image from 'next/image'

export default function OurPortFolio() {
    const works = [
        {
            name: "Haya Fashion Ltd",
            category: "E-Commerce",
            workType: "Website | Ui/Ux | Logo",
            thumbnail: haya,
            preview: "https://hayafashionltd.com/",
            technology: ["ReactJs", "NodeJS", "MongoDB", "ExpressJS", "Figma"]
        },
        {
            name: "Cozy Fashions",
            category: "E-Commerce",
            workType: "Poster Design",
            thumbnail: cozy,
            preview: "https://www.behance.net/gallery/202041895/Social-Media-Poster-Design-for-T-shirt",
            technology: ["Photoshop", "Illustrator", "Canva"]
        },
        {
            name: "Noman and Rohan GCM",
            category: "Construction (Abu Dhabi)",
            workType: "Website | Ui/Ux",
            thumbnail: Noman,
            preview: "https://nomanandrohangcm.com/",
            technology: ["ReactJs", "NodeJS", "MongoDB", "ExpressJS", "Figma"]
        },
        {
            name: "E-Commerce Design",
            category: "E-Commerce",
            workType: "Ui/Ux",
            thumbnail: china,
            preview: "https://www.behance.net/gallery/200164505/Interactive-UiUX-design-for-e-commerce-application",
            technology: ["Photoshop", "Illustrator", "figma", "AdobeXD"]
        },
        {
            name: "Rashidabad Sports Academy",
            category: "Sports",
            workType: "Poster Design",
            thumbnail: sports,
            preview: "https://www.behance.net/gallery/200164345/Football-Tournament-Poster",
            technology: ["Photoshop", "Illustrator", "Canva"]
        },
        ,
        {
            name: "Next Gen FX",
            category: "Visual Effects (VFX)",
            workType: "Website | Ui/Ux",
            thumbnail: nextGen,
            preview: "https://nextgenfx.netlify.app/",
            technology: ["ReactJs", "NodeJS", "MongoDB", "ExpressJS", "Figma"]
        }
    ]
    return (
        <div>
            <div className='mt-[-50px]'>
                <GradientText text={"Look at our Portfolio"}></GradientText>
            </div>
            <div className='flex justify-center my-10 mx-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        works.map((work, i) => <div className='bg-[#222228] p-5 rounded-md' key={i}>
                            <Image className='w-full h-[350px] lg:h-[550px] object-cover rounded-md' src={work.thumbnail} alt={work.name} quality={75} placeholder='blur' />
                            <div className=' mx-2'>
                                <h1 className='text-2xl text-[#8657FB] font-semibold uppercase mt-5'>{work.name}</h1>
                                <h1 className='text-xl mt-1'>{work.workType}</h1>
                                <h1 className='text-md mt-1'>{work.category}</h1>
                                <div className='flex mt-2'>
                                    <div className='bg-[#8657FB] hover:bg-[#c7b5f4] px-4 py-1 rounded-full'>
                                        <a target='_blank' href={work.preview}>Preview</a>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-md mt-2'>Technology Used</h1>
                                    <div className='grid grid-cols-3 lg:flex gap-2'>
                                        {
                                            work.technology.map((tech, i) => <div className='bg-[#b962f4] px-4 py-1 cursor-pointer hover:bg-[#ddc2f0] mt-2 rounded-full' key={i}>
                                                <h1 className='text-[12px]'>{tech}</h1>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
