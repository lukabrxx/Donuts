import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { HomePage,ProductPage } from "./pages";
import Navbar from "./components/Navbar";
function App() {


  return (
<BrowserRouter>


<main className='bg-[url("../images/bg.svg")] bg-cover bg-no-repeat'>
<Navbar />
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/donuts" element={<ProductPage />}/>
</Routes>
</main>
</BrowserRouter>
  )
}

export default App
