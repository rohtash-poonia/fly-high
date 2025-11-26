
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <header>
            <nav className='max-w-[1170px] w-full mx-auto px-3 pt-[3px]  ' >
                <div className='flex justify-between gap-3'>
             < Image className='max-md: h-[90] max-md: w-[250] max-sm:h-[70] max-sm:w-[200]' src="/image/logo.png" alt="logo" width={400} height={128} />
             <Image className='hidden max-sm:block h-[50px] w-[50px]'  src="/image/bars.png" alt="bars" width={80} height={30} />  
             <div className='flex gap-[50px] max-sm:hidden'>
            <div className='flex items-center gap-[14] '>
                <div className='bg-[#2BA8E4]/10 h-[40] w-[40] rounded-[27px_12px_24px_16px]'></div>
                <div className='flex flex-col'>
                <h2 className='text-[18px] font-bold font-[poppins]'>+917888681170</h2>
                <p className='text-[#383838] text-[18px] font-[roboto]'>Call Us Today</p>
                </div>
                </div>  
            <div className='flex items-center gap-[14] '>
                <div className='bg-[#2BA8E4]/10 h-[40] w-[40] rounded-[27px_12px_24px_16px]'></div>
                <div className='flex flex-col'>
                <h2 className='text-[18px] font-bold  font-[poppins]'>+917888681170</h2>
                <p className='text-[#383838] text-[18px] font-[roboto]'>Whatsapp Chat</p>
                </div>
                </div>
                
                </div>
            </div>
            </nav>
        </header>
    </div>
  )
}
