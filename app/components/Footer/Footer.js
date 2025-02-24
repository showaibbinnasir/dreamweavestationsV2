import Image from 'next/image'
import React from 'react'
import logoMain from "@/public/mainlogo.png"
import Link from 'next/link'
import facebook from '@/public/facebook.png'
import instagram from '@/public/instagram.png'
import linkedIn from '@/public/linkedIn.png'
import telegram from '@/public/telegram.png'

export default function Footer() {
    return (
        <div className='mt-5'>
            <div>
                <div className='bg-[#1F0639] p-10 flex flex-col lg:flex-row lg:justify-around gap-[40px] justify-start lg:items-center '>
                    <div>
                        <Image src={logoMain} alt='dreamweavestations' width={150} height={150} />
                        <div>
                            <h1 className='w-[300px] lg:w-[450px]'>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-3'>Section</h1>
                        <div className='flex flex-col gap-2'>
                            <Link href="/" prefetch={false}>Home</Link>
                            <Link href="/services" prefetch={false}>Service</Link>
                            <Link href="/portfolio" prefetch={false}>Portfolio</Link>
                            <Link href="/contact" prefetch={false}>Contact</Link>
                            <Link href="/about" prefetch={false}>About</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-3'>Address</h1>
                        <div className='flex flex-col gap-2'>
                            <h1 className='w-[300px]'>53, Kazi Nazrul Islam Road, Chittagong, Bangladesh, 4000</h1>
                        </div>
                    </div>
                </div>

            </div>
            <div className='p-5 bg-white text-black flex flex-col lg:flex-row justify-start lg:justify-around gap-5 lg:items-center'>
                <div>
                    <h1>&copy; All rights reserved by Dreamweave stations</h1>
                </div>
                <div>
                    <div className='flex gap-3'>
                        <Image src={facebook} alt='facebook'/>
                        <Image src={instagram} alt='instagram'/>
                        <Image src={linkedIn} alt='linkedIn'/>
                        <Image src={telegram} alt='telegram'/>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-5'>
                        <Image width={50} height={50} src={logoMain} alt='main logo'/> 
                        <h1>Dream weave stations</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}
