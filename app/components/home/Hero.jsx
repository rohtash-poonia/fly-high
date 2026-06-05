import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className=' bg-[url("/image/herobg.png")] w-full bg-no-repeat bg-cover bg-center'>
        <div className='max-w-[1170px] w-full mx-auto px-3  flex gap-[412px] relative '>
            <article className='pt-[132px] pb-[329px] max-lg:pt-[80] max-lg:pb-[200px] max-sm:pt-[50px] max-sm:pb-[100px] '>
     <div className='bg-black font-[opensans] text-white w-[265px] h-[46px] leading-[22px] max-sm:leading-[10px] flex items-center justify-center rounded-[6] max-sm:w-[130]  max-sm:h-[30] '>WELCOME TO</div>
     <h1 className='text-[60px] font-extrabold text-white pt-[32] max-sm:pt-[15px] max-w-[450px] w-full leading-[61px] font-[heebo] max-md:text-[32px] max-sm:text-[24px] max-sm:font-semibold '>Fly High
        <span className='text-[#2BA8E4]'> Consultants</span></h1>
        </article>
        <aside className='absolute right-[120px] top-[230px] max-md:hidden '>
        <Image  src="/image/hero-onflight.png" alt="hero-onflight" width={159} height={190} />
     </aside>
    </div>
    </section>
  )
}

export default Hero