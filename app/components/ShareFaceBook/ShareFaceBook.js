"use client"
import React from 'react'

export default function ShareFaceBook({postURL}) {
    const shareOnFacebook = () => {
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postURL)}`;
        window.open(facebookShareUrl, '_blank', 'width=600,height=400');
    };
    return (
        <div>

            <div>
                <button
                    onClick={shareOnFacebook}
                    style={{ padding: '10px', background: '#1877F2', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}
                >
                    Share on Facebook
                </button>
            </div>
        </div>
    )
}
