import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DonutCard from '../components/DonutCard'
import {donuts} from "../donuts.js"
import { getProducts } from '../redux/actions/productActions.js'

const ProductPage = () => {
  const dispatch = useDispatch()
  
  const productList = useSelector((state) => state.products)
  const { loading, error, products } = productList
  console.log(products)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <div className='bg-[url("../images/bg.svg")] bg-cover bg-no-repeat entering__down'>
    <h2 className='text-3xl font-[500] text-mainPink mt-16 md:pt-6 py-6 px-8 lg:text-4xl text-center lg:text-left'>Our Finest Donuts</h2>
    <div className='w-full flex justify-center flex-wrap gap-4 xxl:gap-6 px-6 lg:px-12 xl:px-16 xxl:px-18 py-4'>
    {
      products.map(donut => (
        <DonutCard key={donut._id} donut={donut}  />
      ))
    }
    </div>
    </div>
  )
}

export default ProductPage
