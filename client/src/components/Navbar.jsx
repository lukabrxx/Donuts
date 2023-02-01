import React,{ useState } from "react"
import {BsFillBagFill} from "react-icons/bs"
import Hamburger from 'hamburger-react'
const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='hidden h-[70px] w-full shadow-xl md:flex items-center justify-between lg:px-[80px] py-2'>

        <div className='flex justify-between'>
        <h2 className='font-navbar text-4xl font-extrabold tracking-wider hover:text-mainPink cursor-pointer transition-all duration-500 ease-in-out'>D<span className='text-mainPink hover:text-mainText'>P</span> Shop</h2>

        <ul className='flex gap-2 lg:gap-4 lg:pr-8 lg:py-2 pl-8 justify-start items-center'>
        <li className='cursor-pointer hover:text-mainPink font-[500] text-[18px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg'>Home</li>
        <li className='cursor-pointer hover:text-mainPink font-[500] text-[18px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg'>Weekly Menu</li>
        <li className='cursor-pointer hover:text-mainPink font-[500] text-[18px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg'>About</li>
        <li className='cursor-pointer hover:text-mainPink font-[500] text-[18px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg'>Visit us</li>
      </ul>

        </div>

     

      <div className='flex justify-center items-center'>
        <BsFillBagFill className="text-mainText text-2xl  mx-2 transition-all duration-500 ease-in-out hover:text-mainPink cursor-pointer  "/>
        <button className='cursor-pointer hover:text-mainPink font-bold text-[18px] tracking-wider mx-2 transition-all duration-500 ease-in-out'>Login</button>
        <button className='text-white bg-mainPink px-6 py-2 rounded-lg cursor-pointer mx-2 transition-all duration-500 ease-in-out hover:bg-mainPinkHoverButton'>Sign up</button>
      </div>

      </div>

      {/** MOBILE */}
      <div className='h-[50px] w-full shadow-xl flex md:hidden justify-between items-center p-2 z-20'>
        
      <div >
        <h2 className='font-navbar text-3xl font-extrabold  hover:text-mainPink cursor-pointer transition-all duration-500 ease-in-out'>D<span className='text-mainPink hover:text-mainText'>P</span> Shop</h2>
        </div>

        <Hamburger toggled={open} toggle={setOpen} />

        {
          open && 
          <div className="absolute top-[50px]  h-[calc(100vh-50px)] w-[65%] right-0 z-10 shadow-xl bg-white/70 right-side__animation">
          <ul className='flex flex-col gap-2 lg:gap-4 lg:pr-8 lg:py-2 pl-8 justify-start items-end mr-6 mt-12'>
        <li className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>Home</li>
        <li className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>Weekly Menu</li>
        <li className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>About</li>
        <li className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>Visit us</li>
        <li className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>Login</li>
        <li className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>Sign Up</li>
      </ul>
  
      <div className=" pt-8 flex justify-center">
        <img src="../images/astro.png" alt="astronaut"  className="w-[90px]"/>
      </div>
          </div>
        }
      </div>
    </>
  )
}

export default Navbar