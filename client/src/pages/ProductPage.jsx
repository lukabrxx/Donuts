import React from 'react'
import DonutCard from '../components/DonutCard'
import {donuts} from "../donuts.js"
const ProductPage = () => {
  return (
    <div className='bg-[url("../images/bg.svg")] bg-cover bg-no-repeat'>
    <h2 className='text-3xl font-[500] text-mainPink py-6 px-8 lg:text-4xl'>Our Finest Donuts</h2>
    <div className='w-full flex justify-center flex-wrap gap-4 xxl:gap-6 px-6 lg:px-12 xl:px-16 xxl:px-18 py-4'>
    {
      donuts.map(donut => (
        <DonutCard key={donut._id} donut={donut}  />
      ))
    }
    </div>
    </div>
  )
}

export default ProductPage
