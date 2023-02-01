import React from 'react'
import PropTypes from 'prop-types'; 
import {BsFillBagFill} from "react-icons/bs"
import {AiOutlineArrowRight} from "react-icons/ai"
const DonutCard = ({donut}) => {
    const {image,name,price} = donut
  return (
    <div className='w-[260px] h-[320px] flex flex-col bg-white/60 shadow-lg rounded-[16px]'>
        <div className='flex justify-center items-center'>
            <img src={image} alt={name} className="w-[150px] pt-4"/>
        </div>
        <div className='h-full flex justify-start pt-4 flex-col items-center'>
            <h2 className='text-[18px] pt-2 font-[600]'>{name}</h2>
            <p className='text-[18px] pt-2'>{price} $</p>
            <div className=' w-full flex justify-between items-center gap-2 px-[30px] pt-2'>
             <button className='text-white bg-mainPink px-4 py-1 rounded-[8px] cursor-pointer transition-all duration-500 ease-in-out hover:bg-mainPinkHoverButton mt-2 flex justify-center items-center gap-2'>Add <BsFillBagFill className="w-4 h-4" /> </button>
             <button className='text-white bg-mainPink px-4 py-1 rounded-[8px] cursor-pointer transition-all duration-500 ease-in-out hover:bg-mainPinkHoverButton mt-2 flex justify-center items-center gap-2 '>More <AiOutlineArrowRight className="w-4 h-4 " /> </button>   
            </div>
            
        </div>
    </div>
  )
}
DonutCard.propTypes  = {
  donut: PropTypes.node,
}
export default DonutCard