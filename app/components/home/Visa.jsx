import Image from 'next/image'
import React from 'react'

export const Visa = () => {
  return (
    <div>
          <section className='bg-[#EAEAEA]'>
        <div className='max-w-[1140px] w-full mx-auto px-3'>
        <h2 className='text-[42px] font-bold font-[poppins] text-center text-[#2BA8E4] max-md:pt-[60px] max-sm:pt-[30px] pt-[130px] max-md:text-[35px] '>Visa</h2>
            <div className='flex flex-col gap-[60px] max-md:gap-[30px] pt-[30px]'>
            <div className=' grid grid-cols-3 gap-[30px]  max-md:grid-cols-2 max-sm:grid-cols-1 '>
            <div className='max-sm:mx-auto'>
                <Image src="/image/student-visa.png" alt="student-visa" width={360} height={240} />
            <div className='max-w-[360px] w-full  bg-black font-[poppins] text-white pl-[35px] py-[20] '>Student Visa</div> 
            </div>     
            <div className='max-sm:mx-auto'>
                <Image src="/image/buisness-visa.png" alt="buisness-visa" width={360} height={240} />
            <div className='max-w-[360px] w-full font-[poppins] bg-black text-white pl-[35px] py-[20] '>Business Visa</div> 
            </div>     
            <div className='max-sm:mx-auto'>
                <Image src="/image/job-seeker.png" alt="job-seeker" width={360} height={240} />
            <div className='max-w-[360px] w-full font-[poppins]  bg-black text-white pl-[35px] py-[20] '>Job Seeker Visa</div> 
            </div> 
            </div> 
        <div className=' grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[30px] pb-[190px] max-md:pb-[90px] max-sm:pb-[30px] '>
            <div className='max-sm:mx-auto'>
                <Image src="/image/tourist.png" alt="tourist-visa" width={360} height={240} />
            <div className='max-w-[360px] w-full  bg-black font-[poppins] text-white pl-[35px] py-[20] '>Tourist Visa</div> 
            </div>     
            <div className='max-sm:mx-auto'>
                <Image src="/image/diplomatic-visa.png" alt="diplomatic-visa" width={360} height={240} />
            <div className='max-w-[360px] w-full font-[poppins] bg-black text-white pl-[35px] py-[20] '>Diplomatic Visa</div> 
            </div>     
            <div className='max-sm:mx-auto'>
                <Image src="/image/family-visa.png" alt="job-seeker" width={360} height={240} />
            <div className='max-w-[360px] w-full font-[poppins]  bg-black text-white pl-[35px] py-[20] '>Family Visa   </div> 
            </div> 
            </div>   
            </div> 
        </div>
    </section>
    </div>
  )
}

