import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import addfile from "@/public/addfile.png"
import gear from "@/public/gear.png"

export default function BlogOptions() {
    return (
        <div>
            <div className='flex justify-between items-center gap-3 px-5 my-5 lg:px-16'>
                <Link href="/blogs/postBlog">
                    <div className='flex items-center gap-3 bg-[#6A3DC5] p-3 rounded-md cursor-pointer hover:bg-[#b793fe]'>
                        <Image src={addfile} alt='file' height={30} width={30} />
                        <h1>Publish your blog today</h1>
                    </div>
                </Link>
                <Link href={"/blogs/blogmanager"}>
                    <div className='bg-[#6A3DC5] p-3 rounded-md cursor-pointer hover:bg-[#b793fe]'>
                        <Image src={gear} alt='gear' height={30} width={30} />
                    </div>
                </Link>
            </div>
        </div>
    )
}
