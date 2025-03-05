'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import addfile from "@/public/addfile.png"
import insta from "@/public/insta.png"
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

export default function SocialShare({ postURL, title }) {
    const [copied, setCopied] = useState(false);
    const shareUrl = postURL; // Your actual URL

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const shareToInstagramDM = () => {
        const shareUrl = postURL; // Your post URL
        const instagramUrl = `https://www.instagram.com/direct/new/?text=${shareUrl}`;
        
        window.open(instagramUrl, "_blank");
    };
    return (
        <div>
            <h1 className='text-blue-500 text-xl my-5'>Share to social media</h1>
            <div className="flex items-center gap-4">
                <FacebookShareButton url={postURL} quote={title}>
                    <FacebookIcon size={40} round />
                </FacebookShareButton>

                <TwitterShareButton url={postURL} title={title}>
                    <TwitterIcon size={40} round />
                </TwitterShareButton>

                <WhatsappShareButton url={postURL} title={title}>
                    <WhatsappIcon size={40} round />
                </WhatsappShareButton>
                <div className=' cursor-pointer' onClick={shareToInstagramDM}>
                    <Image src={insta} width={50} height={50} alt='insta' />
                </div>

                <div className='my-5'>
                    <button
                        onClick={copyToClipboard}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        {copied ? "Copied!" : "Copy Link"}
                    </button>

                </div>


            </div>


            <div className='flex justify-center my-5'>
                <Link href="/blogs/postBlog">
                    <div className='flex items-center gap-3 bg-[#6A3DC5] p-3 rounded-md cursor-pointer hover:bg-[#b793fe]'>
                        <Image src={addfile} alt='file' height={30} width={30} />
                        <h1>Publish your blog today</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}
