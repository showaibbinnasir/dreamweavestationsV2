import Image from 'next/image'
import React from 'react'
import read from "@/public/read.png"
import write from "@/public/write.png"
import Link from 'next/link'
export default function BlogSection() {
    return (
        <div className='flex justify-center mx-5 lg:mx-5 mt-10'>
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='w-full'>
                    <Link href="/blogs"><Image className=' rounded-md' src={read} alt='' /></Link>
                </div>
                <div className='w-full'>
                    <Link href="/blogs/postBlog"><Image className=' rounded-md' src={write} alt='' /></Link>
                </div>
            </div>
        </div>
    )
}
