import React from 'react'

export default function GradientText({text}) {
    return (
        <div>
            <h1 className='text-center mt-[50px] font-semibold text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]'>{text}</h1>
        </div>
    )
}
