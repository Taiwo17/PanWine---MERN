import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="wrapper bg-[url('/assets/hero_section.png')] h-screen bg-cover bg-no-repeat md:flex md:flex-col md:items-center ">
      <div className='pt-[80px] flex flex-col gap-[30px] mb-[40px] lg:mb-[100px] lg:pt-[100px] lg:px-[300px] '>
        <h1 className='text-white text-[40px] font-bold leading-[50px] lg:text-center lg:leading-[72px] lg:text-[60px] '>
          Tastefulness & Elegance of a Best Wine
        </h1>
        <p className='text-white md:font-medium text-[20px] md:text-center'>
          Browse our collection to find that delectable taste you desire
        </p>
      </div>
      <div>
        <Button className='px-[32px] py-[30px] md:px-[64px] text-[20px] md:py-8 md:text-[25px] text-white bg-primary-wine font-semibold hover:bg-primary-wine '>
          <Link href='/products'>Explore Product</Link>
        </Button>
      </div>
    </div>
  )
}

export default Hero
