import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { HomePage,ProductPage } from "./pages";
import Navbar from "./components/Navbar";
function App() {


  return (
<BrowserRouter>
<Navbar />
<main>
<Routes>
<Route path="/products" element={<ProductPage />}/>
<Route path="/" element={<HomePage />} />
</Routes>
</main>
</BrowserRouter>
  )
}

export default App
