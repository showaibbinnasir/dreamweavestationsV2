'use client'
import React from 'react'
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from "react-share";

export default function SocialShare({postURL, title}) {
    return (
        <div>
            <h1 className='text-blue-500 text-xl my-5'>Share to social media</h1>
            <div className="flex gap-4">
                <FacebookShareButton url={postURL} quote={title}>
                    <FacebookIcon size={40} round />
                </FacebookShareButton>

                <TwitterShareButton url={postURL} title={title}>
                    <TwitterIcon size={40} round />
                </TwitterShareButton>

                <LinkedinShareButton url={postURL} title={title}>
                    <LinkedinIcon size={40} round />
                </LinkedinShareButton>

                <WhatsappShareButton url={postURL} title={title}>
                    <WhatsappIcon size={40} round />
                </WhatsappShareButton>
            </div>
        </div>
    )
}
