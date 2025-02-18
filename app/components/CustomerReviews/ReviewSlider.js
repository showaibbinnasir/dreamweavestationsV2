import React from 'react'
import {
    Carousel,
    CarouselButtons,
    CarouselControl,
    CarouselIndicators,
    CarouselItem,
    CarouselNextButton,
    CarouselPrevButton,
    CarouselSlides,
} from 'keep-react'


export default function ReviewSlider({ data }) {
    return (
        <div className='mx-5 my-5'>
            {/* <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
                <CarouselSlides>
                    {data.map((review, i) => (
                        <CarouselItem key={i}>
                            <div className='flex justify-center'>
                                <div className='bg-[#18181C] p-10 h-[470px] w-[300px] lg:w-[750px] flex items-center rounded-md'>
                                    <div>
                                        {
                                            review?.des.length > 200 ? 
                                            <h1 className='my-5'> {review?.des.substring(0, 300)}.... </h1> : 
                                            <h1 className='my-5'>{review?.des}</h1>
                                        }
                                        <hr />
                                        <div className='flex items-center gap-2 mt-5'>
                                            <img className='w-[40px] h-[40px] rounded-full bg-cover' src={review.image} alt="" />
                                            <h1 className='text-md font-semibold'>{review.name}</h1>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselSlides>
                <CarouselControl>
                    <CarouselButtons>
                        <CarouselPrevButton />
                        <CarouselNextButton />
                    </CarouselButtons>
                    <CarouselIndicators />
                </CarouselControl>
            </Carousel> */}
            <Carousel options={{ slidesToScroll: 1 }}>
                <CarouselSlides className="flex">
                    {data.map((review, i) => (
                        <CarouselItem key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%]">
                            <div className='flex justify-center'>
                                <div className='bg-[#18181C] p-10 h-[500px] w-[350px] lg:w-[950px] flex items-center rounded-md'>
                                    <div>
                                        {
                                            review?.des.length > 350 ?
                                                <h1 className='my-5'> {review?.des.substring(0, 350)}.... </h1> :
                                                <h1 className='my-5'>{review?.des}</h1>
                                        }
                                        <hr />
                                        <div className='flex items-center gap-2 mt-5'>
                                            <img className='w-[40px] h-[40px] rounded-full bg-cover' src={review.image} alt="" />
                                            <h1 className='text-md font-semibold'>{review.name}</h1>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselSlides>
                <CarouselControl>
                    <CarouselButtons>
                        <CarouselPrevButton />
                        <CarouselNextButton />
                    </CarouselButtons>
                    <CarouselIndicators />
                </CarouselControl>
            </Carousel>


        </div>
    )
}
