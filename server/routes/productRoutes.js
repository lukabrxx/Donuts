//! ====IMPORTS====
const express = require("express")
const asyncHandler = require("express-async-handler")
const Product = require("../models/Product.js")

const productRouter = express.Router()
//! ====Controllers==== 
 //* get all products 
 const getProducts = asyncHandler(async(req,res) => {
    const products = await Product.find({})

    res.json(products)
 })
 //* get single product 
 const getProduct = asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error("Product not found")
    }
    
 })
 //* create product
 const createProduct = asyncHandler(async(req,res) => {
    const {name,image,description, price, stock} = req.body
    
    const newProduct = await Product.create({
        name,
        image,
        description,
        price,
        stock
    })

    await newProduct.save()


    if(newProduct) {
        res.json(newProduct)
    } else {
        res.status(404)
        throw new Error("Product could not be upload.")
    }
 })
//! ====Routes==== 
productRouter.get("/", getProducts)
productRouter.get("/:id", getProduct)
productRouter.post("/", createProduct)

module.exports = productRouter 