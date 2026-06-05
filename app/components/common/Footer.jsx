import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[rgba(211,207,253,0.05)]">
      <div className="pt-[125px] pb-[130px] max-md:pt-[60px] max-md:pb-[60px] max-sm:pt-[30px] max-sm:pb-[30px] ">
      <div className="max-w-[1170px] w-full mx-auto px-3 flex justify-between gap-3 max-md:flex-col max-md:items-center">
        <div className="max-w-[624px] w-full">
          <h2 className="font-bold text-[42px] max-md:text-[32px] max-sm:text-[22px] max-sm:leading-[20px] leading-[50.4px] font-[poppins]">
            Quick Enquiry
          </h2>
          <form action="#">
            <div className="flex gap-[30px] flex-col pt-[30px]">
              <input
                className="bg-white w-full px-4 py-3 placeholder:font-[roboto]  placeholder:text-[18px] placeholder:text-[#757575]"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-white w-full px-4 py-3 placeholder:font-[roboto] placeholder:text-[18px] placeholder:text-[#757575]"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-white w-full px-4 py-3 placeholder:font-[roboto] placeholder:text-[18px] placeholder:text-[#757575]"
                type="text"
                placeholder="Phone"
              />
              <textarea
                className="bg-white  w-full h-[140px] resize-none"
                name="message"
                id="message"
              ></textarea>
            </div>  
            <button className="bg-[#2BA8E4] cursor-pointer font-[roboto] w-full h-[45px] mt-[49px] text-white font-semibold text-[14px]">
              Send a Message
            </button>
          </form>
        </div>
        <aside className="w-full  max-w-[437px] max-md:pt-[20px] ">
          <div className="flex flex-col gap-[30]">
            <div className="flex gap-[15px] ">
              <div className="max-w-[52px] ">
                <Image
                  src="/image/footer-location-icon.png"
                  alt="footer-plane"
                  width={52}
                  height={52}
                />
              </div>
              <div className="flex flex-col gap-[14]  max-sm:gap-2">
                <h3 className="text-[31px] font-bold font-[poppins] leading-[38px] max-md:text-[24px] max-sm:text-[18px] max-sm:leading-[20px]">
                  Follow Us
                </h3>
                <div className="flex gap-[15px]">
                  <Image
                    src="/image/facebook-icon.png"
                    alt="facebook-icons"
                    width={57}
                    height={57}
                  />
                  <Image
                    src="/image/insta-icon.png"
                    alt="insta-icon"
                    width={57}
                    height={57}
                  />
                  <Image
                    src="/image/wattsapp-icon.png"
                    alt="wattsapp-icon"
                    width={57}
                    height={57}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="max-w-[52px] w-full">
                <Image
                  src="/image/reach-us.png"
                  alt="reach-us"
                  height={52}
                  width={52}
                />
              </div>
              <div className="flex flex-col gap-[14]  max-sm:gap-2">
                <h2 className="font-bold text-[31px] leading-[34px] font-[poppins] max-md:text-[24px] max-sm:text-[18px] max-sm:leading-[20px]">
                  Reach Us
                </h2>
                <p className="max-w-[318px] w-full text-[#2BA8E4] font-[roboto] text-[18px] leading-[34px]  max-md:leading-[20px] max-sm:text-[14px] ">
                  36, Arora Market, Jakhal Market, Patran, Patiala-147105.
                </p>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="max-w-[52px] w-full">
                <Image
                  src="/image/reach-us.png"
                  alt="reach-us"
                  height={52}
                  width={52}
                />
              </div>
              <div className="flex flex-col gap-[14] max-sm:gap-2">
                <h2 className="font-bold text-[31px] font-[Poppins] max-md:text-[24px] max-sm:text-[18px] max-sm:leading-[20px] leading-[34px]">
                  Call Us Now
                </h2>
                <p className="max-w-[318px] w-full font-[roboto] text-[#2BA8E4] text-[18px] leading-[34px] max-md:leading-[20px] max-sm:text-[14px] ">
                  +917888681170
                </p>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="max-w-[52px] w-full">
                <Image
                  src="/image/mail-icon.png"
                  alt="mail"
                  height={52}
                  width={52}
                />
              </div>
              <div className="flex flex-col gap-[14]  max-sm:gap-2">
                <h2 className="font-bold text-[31px] font-[popppins] leading-[34px] max-md:text-[24px] max-sm:text-[18px] max-sm:leading-[20px]">
                  Mail Us
                </h2>
                <p className="max-w-[318px] w-full font-[roboto] text-[#2BA8E4] text-[18px] leading-[34px] max-md:leading-[20px] max-sm:text-[14px] ">
                  contact@flyhighconsultants.in.net
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      </div>
      </div>
     <div className="bg-white h-[65px] w-full">
        <div className="max-w-[1170px] w-full bg-black h-[1] mx-auto"></div>
        <p className="text-center text-[18px]  py-4 text-[#A3A3A3] font-[roboto] max-md:text-16px max-sm:text-[12px] max-md:py-3 max-sm:py-2">Copyright © 2023 Fly High Consultants. All rights reserved. Design by Digital Marketing City</p>
     </div>
    </footer>
  );
};
export default Footer;
