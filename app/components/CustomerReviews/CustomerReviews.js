import getAllReviews from '@/app/utils/getAllReviews'
import React from 'react'
import ReviewSlider from './ReviewSlider'

export default async function CustomerReviews() {
    const reviews = await getAllReviews()
    return (
        <div>
            <h1 className='text-center my-5 font-semibold text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]'>Customers Review</h1>
            <div>
                <ReviewSlider data={reviews}></ReviewSlider>
            </div>
        </div>
    )
}
