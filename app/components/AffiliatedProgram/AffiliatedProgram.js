import React from 'react'
import GradientText from '../GradientText/GradientText'
import pxnBussiness from "@/public/pxn.png"
import Image from 'next/image'
import amloki from "@/public/amlokipickels.png"
import garlik from "@/public/garlikPickel.png"
import harbalLife from "@/public/harbalLife.png"
import oil from "@/public/ricebrandoil.png"


export default function AffiliatedProgram() {

    const products = [
        {
            title: "Amloki Pickle",
            image: amloki,
            ingradients: ["Amloki", "Mustard Oil", "Salt", "Citric Acid", "Spices"],
            price: "220/= Taka"

        },
        {
            title: "Garlik Pickle",
            image: garlik,
            ingradients: ["Garlic", "Mustard Oil", "Salt", "Citric Acid", "Spices"],
            price: "220/= Taka"

        },
        {
            title: "Harbal Life Chocolate (Kids)",
            image: harbalLife,
            ingradients: ["Protien", "Fat", "Fiver", "Carbo Hydrate", "Sugar"],
            price: "470/= Taka"

        },
        {
            title: "Rice Brand Oil",
            image: oil,
            ingradients: ["Enery", "Saturated Fatty Acid", "Mono-Saturated Fatty Acide", "Vitamin-E", "Oryzanol"],
            price: "1200/= Taka"

        }
    ]

    return (
        <div className='my-10 mx-5'>
            <GradientText text={"Our Affiliated Partners"}></GradientText>
            <a href="https://www.facebook.com/profile.php?id=61567846746801" target='_blank'>
                <div className='flex justify-center my-10 mx-5'>
                    <div className='flex items-center bg-white p-5 rounded-md'>
                        <Image src={pxnBussiness} alt='this is pxn' width={150} height={150} />
                        <h1 className='text-[#036838] text-2xl font-semibold'>PXN30 Bussiness Center</h1>
                    </div>
                </div>
            </a>
            <div>
                <h1 className='text-2xl lg:text-3xl font-semibold text-center my-5'>Products</h1>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5'>
                        {
                            products.map((product, i) => <a href='https://www.facebook.com/profile.php?id=61567846746801' target='_blank' key={i}> <div className='bg-[#533567] hover:bg-[#a588b8] p-10 rounded-md text-center' key={i}>
                                <div className='flex justify-center'>
                                    <Image src={product.image} className=" object-cover h-[250px] w-[150px]" alt={product.title} />
                                </div>
                                <h1 className='text-2xl font-semibold mt-5'>{product.title}</h1>
                                <h1 className='text-xl font-semibold mt-2 text-[#ffc654]'>{product.price}</h1>
                                <h1 className='text-left text-xl font-semibold my-2'>Ingreditents</h1>
                                <div>
                                    {
                                        product.ingradients.map((ing, i) => <div key={i}>
                                            <div className='flex items-center gap-2'>
                                                <div className='h-2 w-2 rounded-full bg-white'></div>
                                                <h1>{ing}</h1>

                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div></a>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
