import React, { useEffect, useState } from 'react';
import Logo from '../assets/img/logo.svg'
import { CgMenuRight } from 'react-icons/cg';
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import Program from '../components/Program'

const Header = () => {
  const [bg,setBg]= useState(false)
  const [navMobile,setNavMobile]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      return window.scrollY > 40 ? setBg(true):setBg(false)
    })
  })

  return <header className={`${bg ?" bg-white py-3 shadow-md":" bg-none py-5"}
   fixed w-full right-0 left-0 z-10 transition-all duration-300`}>
    <div className="container mx-auto flex justify-between items-center">
      {/* logo  */}
      <a href="#">
        <img src={Logo} alt="" />
      </a>
      {/* nav  */}
      <div className='hidden lg:flex'>
        <Nav />
      </div>
      {/* program  */}
      <Program />
      {/* nav mobile  button  */}
      <div
      onClick={()=>setNavMobile(!navMobile)}
       className=' lg:hidden cursor-pointer'>
        <CgMenuRight className=' text-blue text-3xl' />
      </div>
      {/* mobile nav  */}
      <div className={`${navMobile ?"max-h-[260px]":"max-h-0"}
       fixed bg-orange shadow-lg left-0 w-full h-full top-[78px]
        overflow-hidden transition-all duration-300`}>
        <NavMobile />
      </div>
    </div>

   </header>;
};

export default Header;
