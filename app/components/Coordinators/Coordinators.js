import React from 'react'
import teams from "@/public/coordinators.png"
import Image from 'next/image'
import tech from "@/public/tech.png"
export default function Coordinators() {
    return (
        <div>
            <div className='flex justify-center'>
                <Image className='w-[350px]' src={teams} alt='coordinators' placeholder='blur' quality={50} />
            </div>
            <div>
                <h1 className='text-center my-5 font-semibold text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]'>Meet Our Coordinators</h1>
                <div className='flex justify-center'>
                    <h1 className=' w-[300px] lg:w-[450px]'> Our four coordinators are experts in web development, graphics design, and more, ensuring that we can meet all your creative needs under one roof.</h1>
                </div>

                <h1 className='text-center mt-[50px] font-semibold text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]'>Technology we use</h1>
                <div className='flex justify-center my-10'>
                    <Image className='w-[300px] lg:w-[550px]' src={tech} alt='technology' placeholder='blur' quality={75} />
                </div>

            </div>
        </div>
    )
}
