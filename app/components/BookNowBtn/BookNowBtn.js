'use client'
import { Check } from 'phosphor-react'
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
        toast.error("Still in construction mode!")
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
                                        <Input className='w-[300px] lg:w-[550px]' id="name" placeholder="Enter name" type="text" />
                                    </fieldset>
                                    <fieldset className="max-w-md space-y-1 mt-5">
                                        <Label htmlFor="name">Enter Email</Label>
                                        <Input className='w-[300px] lg:w-[550px]' id="name" placeholder="Enter name" type="text" />
                                    </fieldset>
                                    <fieldset className="max-w-md space-y-1 mt-5">
                                        <Label htmlFor="name">Enter Phone Number</Label>
                                        <Input className='w-[300px] lg:w-[550px]' id="name" placeholder="Enter name" type="text" />
                                    </fieldset>
                                    <fieldset className="space-y-1.5 p-2 mt-5">
                                        <Label htmlFor="message">Your message*</Label>
                                        <Textarea id="message" placeholder="Write your message here" rows={8} />
                                    </fieldset>
                                    <div>
                                        <CustomButton text={"Submit"}></CustomButton>
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
