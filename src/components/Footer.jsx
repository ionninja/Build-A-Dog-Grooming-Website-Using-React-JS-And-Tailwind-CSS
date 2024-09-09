import React from 'react';

import Logo from '../assets/img/logo-white.svg'
import { social } from '../data';
const Footer = () => {
  return <footer className=' bg-orange py-8 lg:py-4'>
    <div className="container mx-auto jub">
      <div className=' flex text-white flex-col gap-y-6
       justify-between'>
        {/* logo  */}
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        {/* copyright  */}
        <div className=' text-[15px]'>
          &copy; Copyright 2024. All rights reserved.
        </div>
        {/* social  */}
        <div className=' flex gap-x-4 justify-end'>
          {social.map((item,index)=>{
            return <a key={index}
            className='bg-[#fe8d71a9] hover:bg-orange w-10 h-10
             rounded-full flex justify-center items-center transition-all
              duration-300 text-2xl '
             href={item.href}>{item.icon}</a>
          })}
        </div>
      </div>

    </div>
  </footer>;
};

export default Footer;
