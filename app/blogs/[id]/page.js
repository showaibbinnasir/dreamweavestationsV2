import GradientText from '@/app/components/GradientText/GradientText'
import ShareFaceBook from '@/app/components/ShareFaceBook/ShareFaceBook'
import SocialShare from '@/app/components/SocialShare/SocialShare'
import getAllBlogPosts from '@/app/utils/getAllBlogPosts'
import getSinglePost from '@/app/utils/getSinglPost'
import Image from 'next/image'
import React from 'react'

export async function generateMetadata({ params }) {
    const { id } = await params
    const post = await getSinglePost(id)
    return {
        title: `Blog | ${post.name}`,
        description: post.title,
        openGraph: {
            title: post.title,
            description: post.description.substring(0, 100),
            url: `https://dreamweavestations.com/blogs/${post._id}`,
            type: "website",
            images: [
                {
                    url: post.imageOne, // Thumbnail URL
                    width: 1200,
                    height: 630,
                    alt: "Thumbnail Image",
                },
            ],
        },
    }
}

export default async function BlogPost({ params }) {
    const { id } = await params
    const post = await getSinglePost(id)
    const postURL = `https://dreamweavestations.com/blogs/${post._id}`
    return (
        <div className=' px-2 lg:px-10'>
            <div>

                <h1 className="text-sm text-center">Blog id: {post._id}</h1>
                <GradientText text={post.title}></GradientText>

                <h1 className="text-sm text-center text-gray-400">Date: {post.date}</h1>
                <div className="py-5 flex items-center gap-3">
                    <Image width={50} height={50} unoptimized className="w-[50px] rounded-full h-[50px] object-cover" src={post.imageOne} alt="" />
                    <h1 className="text-lg font-semibold">{post.name}</h1>

                </div>
                <h1 className='banglatext text-lg my-3 w-[100%] ' dangerouslySetInnerHTML={{ __html: post.description.replace(/\n/g, '<br>') }}></h1>
                <div>
                    {/* <ShareFaceBook postURL={postURL}></ShareFaceBook> */}
                    <SocialShare postURL={postURL} title={post.title}></SocialShare>
                </div>
            </div>

        </div>
    )
}


export async function generateStaticParams() {

    const posts = await getAllBlogPosts()

    return posts.map((post) => ({
        id: post._id
    }

    ))

}