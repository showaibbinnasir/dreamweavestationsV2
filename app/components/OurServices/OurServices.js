import React from 'react'
import development from "@/public/development.png"
import video from "@/public/videoandreels.png"
import graphics from "@/public/graphicsDesign.png"
import banner from "@/public/Banner.png"
import ui from "@/public/ui.png"
import support from "@/public/Poster.png"
import Image from 'next/image'
import bgDes from "@/public/bgSec.png"

export default function OurServices() {
    const services = [
        {
            name: "Development",
            des: "Software powers modern life, enabling efficiency, connectivity, and innovation across diverse industries worldwide.",
            thumbnail: development
        },
        {
            name: "Video and Reels",
            des: "Create captivating videos and reels to share stories, entertain, and engage your audience effectively.",
            thumbnail: video
        }
        ,
        {
            name: "Graphics Design",
            des: "Our logo design process is a seamless journey, from initial concept to final execution.",
            thumbnail: graphics
        }
        ,
        {
            name: "Banner Design",
            des: "Design engaging banners with vivid colors, messaging, eye-catching visuals for maximum impact.",
            thumbnail: banner
        }
        ,
        {
            name: "Ui/Ux",
            des: "Craft intuitive and visually appealing user experiences with seamless navigation, modern aesthetics, and user-centric design for maximum engagement.",
            thumbnail: ui
        }
        ,
        {
            name: "Customer Support",
            des: "Deliver exceptional customer support with prompt responses, clear communication, and personalized solutions to ensure satisfaction and build lasting relationships.",
            thumbnail: support
        }
    ]
    return (
        <div>
            <div className='relative bg-[#533567] mx-1 lg:mx-16 p-2 lg:p-10 rounded-md z-10'>
                <h1 className='text-xl text-center md:text-2xl lg:text-3xl  font-medium lg:font-semibold'> Our Services </h1>
                <div className='my-10'>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            services.map((service, i) => <div className=' bg-[#8758FA] p-3 lg:p-5 rounded-md' key={i}>
                                <div className='flex justify-center'>
                                    <Image width={50} src={service.thumbnail} alt='development' placeholder='blur' />
                                </div>
                                <h1 className='text-lg my-5 font-semibold text-center'>{service.name}</h1>
                                <h1 className='text-center'>{service.des}</h1>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className='relative w-[100%] mt-[-75px] md:mt-[-150px] lg:mt-[-350px] z-0'>
                <Image className='w-[100%]' src={bgDes} alt='this is design' placeholder='blur' quality={100} />
            </div>
        </div>
    )
}
