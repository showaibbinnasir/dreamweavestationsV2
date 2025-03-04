"use client"
import CustomButton from '@/app/components/CustomButton/CustomButton'
import GradientText from '@/app/components/GradientText/GradientText';
import { Button, Input, Label, Spinner, Textarea, toast } from 'keep-react'
import React, { useState } from 'react'

export default function PostBlog() {
    function formatDate(date) {
        const day = date.getDate();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        const year = date.getFullYear();
        const month = monthNames[date.getMonth()];

        // Add suffix to day (st, nd, rd, th)
        const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
            (day % 10 === 2 && day !== 12) ? 'nd' :
                (day % 10 === 3 && day !== 13) ? 'rd' : 'th';

        // Get hours and minutes
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');

        // Determine AM or PM
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // hour '0' should be '12'

        return `${day}${suffix} ${month} ${year}, ${hours}:${minutes}${ampm}`;
    }
    const [isLoading, setIsLoading] = useState(false)
    const handleFormData = e => {
        e.preventDefault()
        setIsLoading(true)
        const form = e.target;
        const name = form.userName.value;
        const description = form.description.value;
        const isVerified = false;
        const title = form.blogtitle.value;
        const currentDate = new Date();
        const date = formatDate(currentDate)
        const image = form.thumbnail.files[0];
        const formData = new FormData()
        formData.append('image', image)
        // const data = {name, title, date, description, isVerified}
        // console.log(data);
        let imageOne = ""
        fetch("https://api.imgbb.com/1/upload?key=63ff49e7f3a9f352605525982cb4b330", {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                imageOne = imageData?.data.url
                const data = { name, imageOne, title, description, date, isVerified }
                fetch('https://portfolio-backend-one-rosy.vercel.app/blogs', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        setIsLoading(false)
                        toast.success('Uploading and awaiting for verification')
                        form.reset()
                    }).catch(err => {
                        setIsLoading(false)
                        toast.error("Something went wrong")
                    })
            })

    }

    return (
        <div>
            <div className='my-10'>
                <GradientText text={"Post yout Blog Today"}></GradientText>
            </div>
            <div className='flex justify-center'>
                <form className='' onSubmit={handleFormData}>
                    <fieldset className="max-w-md space-y-1 mt-5">
                        <Label className='text-white' htmlFor="name">Enter Your Name*</Label>
                        <Input className='w-[300px] lg:w-[550px]' name='userName' id="name" placeholder="Enter your name" required type="text" />
                    </fieldset>
                    <fieldset className="max-w-md space-y-1 mt-5">
                        <Label className='text-white' htmlFor="name">Enter blog title*</Label>
                        <Input className='w-[300px] lg:w-[550px]' name='blogtitle' id="name" placeholder="Enter blog title" required type="text" />
                    </fieldset>
                    <fieldset className="max-w-md space-y-1 mt-5">
                        <Label className='text-white' htmlFor="name">Enter Phone Number*</Label>
                        <Input className='w-[300px] lg:w-[550px]' id="name" name='number' placeholder="Enter Phone Number" required type="text" />
                    </fieldset>
                    <fieldset className="text-[#6a3dc5] max-w-md space-y-1 pb-5">
                        <div className="block">
                            <label
                                htmlFor="files"
                                value="Enter your profile picture"
                            />
                        </div>
                        <input
                            required
                            className="w-full"
                            id="files"
                            type="file"
                            name='thumbnail'

                        />
                    </fieldset>
                    <fieldset className="space-y-1.5 p-2 mt-5">
                        <Label className='text-white' htmlFor="message">Write your Blog*</Label>
                        <Textarea className='text-gray-600' required id="message" name='description' placeholder="Write your blog here" rows={6} />
                    </fieldset>
                    <div className='flex justify-center my-5'>
                        {
                            isLoading ? 
                            <Button className='w-[150px] bg-white' disabled ><Spinner /></Button> : 
                            <Button className='w-[150px]' type='submit'>Publish your blog</Button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}


