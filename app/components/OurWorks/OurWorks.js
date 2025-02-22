import Image from 'next/image'
import React from 'react'
import bgDes from "@/public/bgSec.png"
import CustomerReviews from '../CustomerReviews/CustomerReviews'
import OurPortFolio from '../OurPortfolio/OurPortFolio'
export default function OurWorks() {
    return (
        <div>
            <div className='relative w-[100%] z-0'>
                <Image className='w-[100%]' src={bgDes} alt='this is design' quality={100} />
                <h1 className='absolute top-[40%] md:top-[45%] lg:top-[50%] lg:left-[45%] md:left-[45%] left-[40%] text-xl md:text-2xl lg:text-3xl  font-medium lg:font-semibold'>Our Works</h1>
            </div>
            <div>
                <OurPortFolio></OurPortFolio>
            </div>

            <div>
                <CustomerReviews></CustomerReviews>
            </div>
        </div>
    )
}
