import React from 'react'
import { Skeleton, SkeletonLine } from 'keep-react'

export default function Loading() {
    return (
        <div className='h-[100%] w-[100%] flex justify-center'>
            <div>
                <Skeleton className="max-w-md mx-auto space-y-2.5">
                    <SkeletonLine className="h-4 w-full" />
                    <SkeletonLine className="h-4 w-full" />
                    <SkeletonLine className="h-4 w-3/5" />
                    <SkeletonLine className="h-4 w-4/5" />
                    <SkeletonLine className="h-10 w-2/5" />
                </Skeleton>
            </div>
        </div>
    )
}
