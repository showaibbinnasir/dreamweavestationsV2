import { Button, Input, Textarea, toast } from 'keep-react'
import React from 'react'
import world from "@/public/world.png"
import Image from 'next/image'

export default function ContactForm() {
    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        emailjs.sendForm("service_pnv43f1", "template_wm1aujm", form, "dd2lVj1z9ozm5tAk6")
        toast.success("Message sent")
    }
    return (
        <div className='p-5 flex flex-col-reverse lg:flex-row items-center justify-center gap-24'>
            <div>
                <div>
                    <div>
                        <h1 className='text-3xl font-semibold'>Get In Touch</h1>
                        <h1 className='w-[300px] lg:w-[550px]'>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </h1>
                    </div>
                    <form className='w-[300px] lg:w-[550px] text-gray-500'>
                        <Input className='mt-3' placeholder="Enter name" name="userName" type="text" required />
                        <Input className='mt-3' placeholder="Enter Email" name='email' type="email" required />
                        <Textarea className='mt-3' name='details' placeholder="Write your message here." required rows={8} />
                        <div className='mt-3'>
                            <Button className='bg-gradient-to-r from-[#FF9898] to-[#8054FF] px-10 py-1'>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <Image className='w-[300px] lg:w-[450px]' src={world} alt='this is world' quality={75} placeholder='blur'/>
                </div>
            </div>
        </div>
    )
}
