import React from 'react'
import HCarousel from './HCarousel'
import Welcome from "./Welcome";

export default function Launch() {
  return (
    <section className='flex flex-col items-center justify-between px-8 h-[90vh] mb-4'>
        <div className='w-full py-2 px-4 uppercase grid grid-cols-12 text-center'>
            <div className='col-span-12 lg:col-span-6 md:col-span-12'>
                <Welcome/>
            </div>
            <div className='col-span-12 md:col-span-12 lg:col-span-6'>
                <HCarousel/>
            </div>
        </div>
    </section>
  )
}
