import React from 'react'
import nishad from "@/public/showaib.png"
import pranto from "@/public/pranto.png"
import samad from "@/public/samad.png"
import delwar from "@/public/delwaR.png"
import Image from 'next/image'
import bgDes from '@/public/bgSec.png'


export default function ContactUs() {
  return (
    <div>
      <div className='relative flex justify-center my-5 z-50'>
        <div className='bg-[#8657FB] mx-5 w-[650px] py-10 rounded-md shadow-xl'>
          <h1 className='text-center text-xl font-semibold lg:text-3xl '>About Us</h1>

          <div className='flex flex-col items-center gap-5 my-5 p-5'>
            <div className='flex flex-col lg:flex-row items-center gap-6'>
              <Image className='h-[160px] w-[150px]' src={nishad} alt='Showaib bin Nasir' placeholder='blur' quality={75} />
              <div className='text-center lg:text-left'>
                <h1 className=' text-md lg:text-xl font-semibold'>Showaib bin Nasir</h1>
                <h1>Chief Executive Officer (CEO)</h1>
                <h1>Dream Weave Stations</h1>
                <h1>Phone: +880-1880614408</h1>
                <h1>Mail: showaibbin.nasir1@gmail.com</h1>
              </div>
            </div>
            <hr className='h-[1px] bg-white text-white w-full'/>
            <div className='flex flex-col lg:flex-row items-center gap-6'>
              <Image className=' h-[160px] w-[150px]' src={pranto} alt='Showaib bin Nasir' placeholder='blur' quality={75} />
              <div className='text-center lg:text-left'>
                <h1 className=' text-md lg:text-xl font-semibold'>Pranta Das</h1>
                <h1>Chief Technology Officer (CTO)</h1>
                <h1>Dream Weave Stations</h1>
                <h1>Phone : +880-1824114943</h1>
                <h1>Mail: Prantodas423@gmail.com</h1>
              </div>
            </div>
            <hr className='h-[1px] bg-white text-white w-full'/>
            <div className='flex flex-col lg:flex-row items-center gap-6'>
              <Image className=' h-[160px] w-[150px]' src={samad} alt='Showaib bin Nasir' placeholder='blur' quality={75} />
              <div className='text-center lg:text-left'>
                <h1 className=' text-md lg:text-xl font-semibold'>Md Sharif Samad</h1>
                <h1>Project Manager and Designer</h1>
                <h1>Dream Weave Stations</h1>
                <h1>Phone : +880-1631815324</h1>
                <h1>Mail: mdsharifsamad@gmail.com</h1>
              </div>
            </div>
            <hr className='h-[1px] bg-white text-white w-full'/>
            <div className='flex flex-col lg:flex-row items-center gap-6'>
              <Image className=' h-[160px] w-[150px] object-cover' src={delwar} alt='Showaib bin Nasir' placeholder='blur' quality={75} />
              <div className='text-center lg:text-left'>
                <h1 className=' text-md lg:text-xl font-semibold'>Md Delwar</h1>
                <h1 className=''>Analyst and DevOps Eng.</h1>
                <h1 className=''>Dream Weave Stations</h1>
                <h1 className=''>Phone : +880-1878865256</h1>
                <h1 className=''>Mail: delwar.hosen008@gmail.com</h1>
              </div>
            </div>
            <hr className='h-[1px] bg-white text-white w-full'/>

          </div>
        </div>

      </div>
      <div className='relative w-[100%] mt-[-75px] md:mt-[-150px] lg:mt-[-350px] z-0'>
        <Image className='w-[100%]' src={bgDes} alt='this is design' placeholder='blur' quality={100} />
      </div>
    </div>
  )
}
