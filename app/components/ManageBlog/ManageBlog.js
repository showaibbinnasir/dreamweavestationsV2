import React, { useState } from 'react'
import GradientText from '../GradientText/GradientText'
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { Spinner, Trash } from 'phosphor-react';
import { Skeleton, SkeletonLine, toast } from 'keep-react';

export default function ManageBlog() {
    const { data: blogs = [], refetch, isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await fetch(`https://portfolio-backend-one-rosy.vercel.app/allblogs`)
            const data = await res.json();
            return data;
        }
    })
    const [deleteLoading, setDeleteLoading] = useState(false)
    const handleDeteleButton = (id) => {
        setDeleteLoading(true)
        fetch(`https://portfolio-backend-one-rosy.vercel.app/blogs/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Deleted Successfully!")
                setDeleteLoading(false)
                refetch()
            })
    }
    const [verificationLoading, setVerificationLoading] = useState(false)
    const handleVerifyButton = (id , name) => {
        setVerificationLoading(true)
        const isVerified = true;
        const verify = { isVerified };
        fetch(`https://portfolio-backend-one-rosy.vercel.app/allblogs/postupdate/verified/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(verify)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${name}'s blog Verified Successfully`)
                setVerificationLoading(false)
                refetch()
            })
    }
    const [notVerificationLoading, setNotVerificationLoading] = useState(false)
    const handleNotVerifyButton = (id,name) => {
        setNotVerificationLoading(true)
        const isVerified = false;
        const verify = { isVerified };
        fetch(`https://portfolio-backend-one-rosy.vercel.app/allblogs/postupdate/notverified/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(verify)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${name}'s blog verification false!`)
                setNotVerificationLoading(false)
                refetch()
            })
    }
    return (
        <div>
            <div className='my-16'>
                <GradientText text={"Welcome to Blog Manager"}></GradientText>
            </div>
            <div className='my-5 mx-5'>
                {
                    isLoading ?
                        <div className='flex flex-col gap-5'>
                            <Skeleton className="max-w-md mx-auto space-y-2.5">
                                <SkeletonLine className="h-4 w-full" />
                                <SkeletonLine className="h-4 w-9/12" />
                                <SkeletonLine className="h-4 w-full" />
                                <SkeletonLine className="h-4 w-7/12" />
                            </Skeleton>
                            <Skeleton className="max-w-md mx-auto space-y-2.5">
                                <SkeletonLine className="h-4 w-full" />
                                <SkeletonLine className="h-4 w-9/12" />
                                <SkeletonLine className="h-4 w-full" />
                                <SkeletonLine className="h-4 w-7/12" />
                            </Skeleton>
                            <Skeleton className="max-w-md mx-auto space-y-2.5">
                                <SkeletonLine className="h-4 w-full" />
                                <SkeletonLine className="h-4 w-9/12" />
                                <SkeletonLine className="h-4 w-full" />
                                <SkeletonLine className="h-4 w-7/12" />
                            </Skeleton>
                            <Skeleton className="max-w-md mx-auto space-y-2.5">
                                <SkeletonLine className="h-4 w-full" />
                                <SkeletonLine className="h-4 w-9/12" />
                                <SkeletonLine className="h-4 w-full" />
                                <SkeletonLine className="h-4 w-7/12" />
                            </Skeleton>
                            <Skeleton className="max-w-md mx-auto space-y-2.5">
                                <SkeletonLine className="h-4 w-full" />
                                <SkeletonLine className="h-4 w-9/12" />
                                <SkeletonLine className="h-4 w-full" />
                                <SkeletonLine className="h-4 w-7/12" />
                            </Skeleton>
                            

                        </div> :
                        <div className="flex flex-col gap-5">
                            {
                                blogs.map((data, i) => <div className="" key={i}>
                                    <div className="bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]  p-5 rounded-lg items-center gap-5">

                                        <div className="text-white">
                                            <div className="py-5 flex flex-col lg:flex-row justify-center lg:justify-between px-5">
                                                <div className="flex items-center gap-3">
                                                    <Image height={50} width={50} className="w-[50px] rounded-full h-[50px] object-cover" src={data.imageOne} unoptimized alt="" />
                                                    <h1 className="text-lg font-semibold">{data.name}</h1>

                                                </div>
                                                <div className=" flex items-center gap-5 cursor-pointer py-5">

                                                    <div onClick={() => handleDeteleButton(data._id)}>
                                                        {
                                                            deleteLoading ?
                                                                <Spinner size={32} /> :
                                                                <Trash size={32} color="#ffffff" />
                                                        }
                                                    </div>
                                                    {
                                                        data?.isVerified ?
                                                            <div onClick={() => handleNotVerifyButton(data._id, data.name)}>
                                                                {
                                                                    notVerificationLoading ?
                                                                        <h1 className='bg-yellow-400 rounded-md p-3'><Spinner color='#ffffff' /></h1> :
                                                                        <h1 className='bg-green-400 p-3 rounded-md text-black'>Verified</h1>
                                                                }
                                                            </div> :
                                                            <div onClick={() => handleVerifyButton(data._id, data.name)}>
                                                                {
                                                                    verificationLoading ?
                                                                        <h1 className='bg-yellow-400 rounded-md p-3'><Spinner color='#ffffff' /></h1> :
                                                                        <h1 className='bg-yellow-400 p-3 rounded-md text-black'>Verify</h1>
                                                                }
                                                            </div>
                                                    }

                                                </div>
                                            </div>
                                            <h1 className="font-bold text-md md:text-xl lg:text-2xl">{data.title}</h1>
                                            <h1 className="text-sm text-gray-400 py-5">{data.date}</h1>
                                            <div>
                                                <abbr style={{ textDecoration: "none" }} title={data.description}>{data.description.length > 200 ? data.description.substring(0, 200) + '....' : data.description}</abbr>
                                            </div>

                                        </div>
                                    </div></div>)
                            }
                        </div>
                }
            </div>
        </div>
    )
}
