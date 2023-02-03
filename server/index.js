// lib imports
const dotenv = require("dotenv")
const express = require("express")
const app = express()
const cors = require("cors")
//file imports 
const connectToDB = require("./config/db.js")

const port = process.env.PORT || 5000
app.use(cors({
    origin: process.env.ORIGIN
    }))
//route imports
const productRouter = require("./routes/productRoutes.js")

//connections
dotenv.config()
connectToDB()
app.use(express.json())

//routes 

app.use("/api/products", productRouter)



//connection to server
app.listen(port, () => {
    console.log(`Server runs on the localhost:${port}`)
})