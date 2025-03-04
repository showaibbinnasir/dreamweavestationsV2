
import React from 'react'
import getAllBlogPosts from '../utils/getAllBlogPosts'
import { Button, Spinner } from 'keep-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title: "Dreamweave Stations | Blogs",
    description: "Read All Our Blogs",
    openGraph: {
    title: "Dreamweave Stations | Blogs",
      description: "Read All Our Blogs",
      url: "https://dreamweavev2.netlify.app/contact",
      type: "website",
      images: [
        {
          url: "https://nomanandrohangcm.com/work1.jpg", // Thumbnail URL
          width: 1200,
          height: 630,
          alt: "Thumbnail Image",
        },
      ],
    },
  };

export default async function Blogs() {
    const posts = await getAllBlogPosts()
    return (
        <div className='my-10'>
            <div>
                <h1 className='text-xl text-center md:text-2xl lg:text-3xl  font-medium lg:font-semibold'> All Blogs </h1>
                <h1 className='text-center'>by Dreamweavestations</h1>
            </div>
            <div>
                <div className="px-5 my-5 lg:px-16">
                    <div>
                        {
                            <div className="flex flex-col gap-5">
                                {
                                    posts.map((data, i) => <div className="" key={i}>
                                        <Link href={`/blogs/${data._id}`}>
                                            <div className="bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]  p-5 rounded-lg items-center gap-5">

                                                <div className="text-white">
                                                    <div className="py-5 flex items-center gap-3">
                                                        <Image height={50} width={50} className="w-[50px] rounded-full h-[50px] object-cover" src={data.imageOne} unoptimized alt="" />
                                                        <h1 className="text-lg font-semibold">{data.name}</h1>

                                                    </div>
                                                    <h1 className="font-bold text-md md:text-xl lg:text-2xl">{data.title}</h1>
                                                    <h1 className="text-sm text-gray-400 py-5">{data.date}</h1>
                                                    <div>
                                                        <abbr style={{ textDecoration: "none" }} title={data.description}>{data.description.length > 200 ? data.description.substring(0, 200) + '....' : data.description}</abbr>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>



                                    </div>)
                                }
                            </div>

                        }

                    </div>
                </div>
                <div className='flex justify-center my-5'>
                        <Link href="/blogs/postBlog"><Button className='bg-[#6A3DC5]'>Publish your blog now</Button></Link>
                </div>
            </div>
        </div>
    )
}
