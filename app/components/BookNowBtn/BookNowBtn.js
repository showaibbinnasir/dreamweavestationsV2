'use client'
import { Check } from 'phosphor-react'
import emailjs from "@emailjs/browser";
import {
    Button,
    Input,
    Label,
    Modal,
    ModalAction,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    Textarea,
    toast,
} from 'keep-react'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
export default function BookNowBtn() {
    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.userName.value;
        const email = form.email.value;
        const number = form.number.value;
        const text = form.details.value;
        emailjs.sendForm("service_pnv43f1", "template_y9a1ws8", e.target, "dd2lVj1z9ozm5tAk6")
        toast.success("Message sent!")
        e.target.reset()
    }
    return (
        <div>

            <Modal>
                <ModalAction asChild>
                    <div className="flex justify-center my-5">
                        <CustomButton text={"Book Now"} />
                    </div>
                </ModalAction>
                <ModalContent className="max-w-[20rem] lg:max-w-[56rem] h-[450px] lg:h-[650px] overflow-auto lg:overflow-auto ">
                    <ModalHeader className="mb-6 flex flex-col items-center justify-center space-y-3">
                        <div className="space-y-1 text-center">
                            <ModalTitle className='text-lg font-semibold'>Thanks for having faith on us.</ModalTitle>
                            <ModalDescription className='text-[#8657FB] mb-10'>
                                Before you submit any request for work, i would like to make you undertand that we will keep your data for our research purpose and wont make this open to others. So be faithful on us, thanks you for your privilage.
                            </ModalDescription>
                            <div className='flex justify-center'>
                                <form onSubmit={handleForm} className=''>
                                    <fieldset className="max-w-md space-y-1 mt-5">
                                        <Label htmlFor="name">Enter Name</Label>
                                        <Input className='w-[300px] lg:w-[550px]' name='userName' id="name" placeholder="Enter name" required type="text" />
                                    </fieldset>
                                    <fieldset className="max-w-md space-y-1 mt-5">
                                        <Label htmlFor="name">Enter Email</Label>
                                        <Input className='w-[300px] lg:w-[550px]' name='email' id="name" placeholder="Enter Email" required type="text" />
                                    </fieldset>
                                    <fieldset className="max-w-md space-y-1 mt-5">
                                        <Label htmlFor="name">Enter Phone Number</Label>
                                        <Input className='w-[300px] lg:w-[550px]' id="name" name='number' placeholder="Enter Phone Number" required type="text" />
                                    </fieldset>
                                    <fieldset className="space-y-1.5 p-2 mt-5">
                                        <Label htmlFor="message">Your message*</Label>
                                        <Textarea className='text-gray-600' required id="message" name='details' placeholder="Write your message here" rows={8} />
                                    </fieldset>
                                    <div>
                                        <CustomButton text={"Submit"}> </CustomButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </ModalHeader>
                </ModalContent>
            </Modal>
        </div>
    )
}
