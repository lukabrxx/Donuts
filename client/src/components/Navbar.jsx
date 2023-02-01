import React,{ useState } from "react"
import {BsFillBagFill} from "react-icons/bs"
import Hamburger from 'hamburger-react'
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs"
import { Link } from "react-router-dom"
const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeHandler = () => {
		setOpen(!open);
	};

  return (
    <>
      <div className='hidden h-[70px] w-full  md:flex items-center justify-between lg:px-[80px] py-2 bg-transparent'>

        <div className='flex justify-between'>
        <Link to="/">
        <h2 className='font-navbar text-4xl font-extrabold tracking-wider hover:text-mainPink cursor-pointer transition-all duration-500 ease-in-out'>D<span className='text-mainPink hover:text-mainText'>P</span> Shop</h2></Link>

        <ul className='flex gap-2 lg:gap-4 lg:pr-8 lg:py-2 pl-8 justify-start items-center'>
        <Link to="/donuts"><li className='cursor-pointer hover:text-mainPink font-[500] text-[18px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg'>Donuts</li></Link>
        <li className='cursor-pointer hover:text-mainPink font-[500] text-[18px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg'>Week Special&apos;s</li>
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
      <div className='h-[50px] w-full shadow-xl flex md:hidden justify-between items-center p-2 z-20 bg-white'>
        
      <Link to="/" >
        <h2 className='font-navbar text-3xl font-extrabold  hover:text-mainPink cursor-pointer transition-all duration-500 ease-in-out'>D<span className='text-mainPink hover:text-mainText'>P</span> Shop</h2>
        </Link>

        <Hamburger toggled={open} toggle={setOpen} />

        {
          open && 
          <div className="absolute top-[50px]  h-[calc(100vh-50px)] w-[65%] right-0 z-10 shadow-xl bg-white right-side__animation">

          <div className=" pt-4 flex justify-center items-center flex-col border-mainText border-b-[0.4px] border-dashed">
        <img src="../images/astro.png" alt="astronaut"  className="w-[70px]"/>
        <h2 className="text-mainText font-bold  text-xl mt-2 pb-4 font-navbar">Donut <span className="text-mainPink">Planet</span></h2>
      </div>
          
          <ul className='flex flex-col gap-2   justify-start items-center  my-3 border-mainText border-b-[0.4px] border-dashed w-full'>
    
        <Link to="/donuts"><button onClick={closeHandler} className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>Donuts</button></Link>
        <button onClick={closeHandler} className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>Week Special&apos;s</button>
        <button onClick={closeHandler} className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>About</button>
        <button onClick={closeHandler} className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>Visit us</button>
        <button onClick={closeHandler} className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>Login</button>
        <button onClick={closeHandler} className='cursor-pointer text-mainPink font-[700] text-[20px] tracking-wider mx-2 transition-all duration-500 ease-in-out xxl:text-lg py-3'>Sign up</button>
      </ul>
          
          <div className="flex justify-center items-center py-2 gap-6">
            <BsFacebook  className="text-mainPink px-2 w-10 h-10 "/>
            <BsInstagram  className="text-mainPink px-2 w-10 h-10 "/>
            <BsTwitter  className="text-mainPink px-2 w-10 h-10 "/>
          </div>

          </div>
        }
      </div>
    </>
  )
}

export default Navbar