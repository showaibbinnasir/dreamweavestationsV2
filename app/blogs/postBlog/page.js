import PostingBlogContent from '@/app/components/PostingBlogContent/PostingBlogContent';
import React from 'react'


export const metadata = {
    title: "Post yout blog today!",
    description: "You can publish your blog from dreamweavestations.",
    openGraph: {
        title: "Post yout blog today!",
        description: "You can publish your blog from dreamweavestations.",
        url: "https://dreamweavev2.netlify.app/blog/postBlog",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co.com/JjQRP9NF/Write-Your-Blog-Today-7.png", // Thumbnail URL
                width: 1200,
                height: 630,
                alt: "Thumbnail Image",
            },
        ],
    },
};


export default function PostBlog() {

    return (
        <>
            <PostingBlogContent></PostingBlogContent>
        </>
    )
}


