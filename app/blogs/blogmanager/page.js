"use client"
import GradientText from '@/app/components/GradientText/GradientText'
import ManageBlog from '@/app/components/ManageBlog/ManageBlog'
import { InputOTP, InputOTPGroup, InputOTPItem } from 'keep-react'
import React, { useEffect, useState } from 'react'

export default function Blogmanager() {
    const secretCode = '195240'
    const [value, setValue] = useState('')
    const [content, setContent] = useState(false)
    useEffect(() => {
        if (value === secretCode) {
            setContent(true)
        } else {
            setContent(false)
        }
    }, [value])
    return (
        <div>
            {
                content ? <ManageBlog></ManageBlog> :
                    <div className='flex justify-center my-10'>
                        <div>
                            <div className='my-5'>
                                <GradientText text={"Please enter PIN"}></GradientText>
                            </div>
                            <InputOTP className='w-[300px]' value={value} onChange={(value) => setValue(value)} maxLength={6}>
                                <InputOTPGroup>
                                    <InputOTPItem index={0} className='text-white' />
                                    <InputOTPItem index={1} className='text-white' />
                                    <InputOTPItem index={2} className='text-white' />
                                    <InputOTPItem index={3} className='text-white' />
                                    <InputOTPItem index={4} className='text-white' />
                                    <InputOTPItem index={5} className='text-white' />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>
                    </div>
            }
        </div>
    )
}
