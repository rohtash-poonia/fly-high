import Image from 'next/image'
import React from 'react'

export const HeroNext = () => {
  return (
     <section className='max-w-[1170px] w-full mx-auto px-3'>
           <h2 className="font-bold text-[42px] max-md:text-[23px] max-sm:text-[20px] pt-[109px] max-md:pt-[50px] max-sm:pt-[25px] max-w-[340px] max-md:flex  w-full font-[poppins]">About <span className="text-[#2BA8E4]  px-2"> Fly High </span>
             Consultants</h2>
            <div className='flex gap-[70px] max-md:gap-10 max-sm:gap-5 pt-[32] max-sm:pt-[20] max-md:flex-col max-md:items-center '>
              <article >
             <p className='max-w-[490px] w-full font-[18px] text-[#383838] max-sm:leading-[20px] 
             max-md:leading-[30px] leading-[34px] font-[roboto]'>Fly High Consultants have the courage to pave a different path of
                transparency, individual care and Injecting Passion Into Ielts, Visas,
                Spoken English, Personality Development And Immigration. They
                Mean To Go With A Style And Grandeur Resulting Into Flying Colours,
                Meeting With All The Dreams Of Students Fulfilling Their Aspirations
                Of Studying And Settling Abroad. We At The Fly High Provide
                Thorough Professional Services And Solutions To Students Under A
                Single Umbrella In Career Counseling, English Language Learning
                Skills, Facilitating Admissions In Worldwide Study Destinations, Visa
                Counseling And Preparation For Traveling, Living And Above All
                Working Abroad.</p>
                <div className='flex gap-[15px] pt-[30] max-md:pt-[20] max-md:pb-[60] max-sm:pb-[20] pb-[145px]'>
                <ul>
                  <h3 className='text-[36px] font-bold leading-[49px] max-md:leading-[25px] font-[roboto]   text-[#383838]'>Coaching</h3>
                 <li className='text-[18px] leading-[36.6px] max-md:text-[14px] max-md:leading-[20px]  text-[#383838] font-[roboto] pt-3'>IELTS Coaching</li>
                 <li className='text-[18px] leading-[36.6px] max-md:text-[14px] max-md:leading-[20px]  text-[#383838] font-[roboto] '>IELTS Examination</li>
                 <li className='text-[18px] leading-[36.6px] max-md:text-[14px] max-md:leading-[20px]  text-[#383838] font-[roboto] '>IELTS Band Allocation</li>
                 <li className='text-[18px] leading-[36.6px] max-md:text-[14px] max-md:leading-[20px]  text-[#383838] font-[roboto] '>Spoken English</li>
                 <li className='text-[18px] leading-[36.6px] max-md:text-[14px] max-md:leading-[20px]  text-[#383838] font-[roboto] '>Personality Development</li>
                </ul>
                <ul>
                  <h3 className='text-[36px] font-bold leading-[49px] max-md:leading-[25px]  text-[#383838] font-[roboto] '>Country</h3>
                  <li className='text-[18px] leading-[36.6px] max-md:text-[14px] max-md:leading-[20px]  text-[#383838] font-[roboto] pt-3'>Study In USA</li>
                  <li className='text-[18px] leading-[36.6px] max-md:text-[14px] max-md:leading-[20px]  text-[#383838] font-[roboto]'>Study In Australia</li> 
                  <li className='text-[18px] leading-[36.6px] max-md:text-[14px] max-md:leading-[20px]  text-[#383838] font-[roboto]'>Study In Canada</li>
                  <li className='text-[18px] leading-[36.6px] max-md:text-[14px] max-md:leading-[20px]  text-[#383838] font-[roboto]'>Study In UK</li>
                  <li className='text-[18px] leading-[36.6px] max-md:text-[14px] max-md:leading-[20px]  text-[#383838] font-[roboto]'>Visa Guidance</li>
                </ul>
                </div>
                </article>
                <aside>
                <Image src="/image/girl-read-book.png" alt ="girl" height = {564} width ={435} />
                 <div className='max-w-[255px] max-md:mb-5 font-[roboto] h-[66px] rounded-tr-[50px] rounded-br-[50px] text-[27px] flex gap-1 justify-center items-center font-bold  bg-[linear-gradient(to_right,#2BA8E4,#000000)] text-white '>Fly High  <span className='text-[20px] font-normal'> Consultants</span></div>
                </aside>
                </div> 
        </section>
  )
}

