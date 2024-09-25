import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import View from './Pages/View'
import Wish from './Pages/Wish'
import Cart from './Pages/Cart'
import { Route,Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/wish' element={<Wish/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
