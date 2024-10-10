import { useState } from 'react'
import Navbar from './component/navbar'
import Home from './component/home'
import Abut from './component/abut'
import MyWork from './component/MyWork'
import Contact from './component/contact'
import Footer from './component/footer'

function App() {


  return (
    <div className="w-full min-h-screen bg-[#18181b] flex  flex-col ">
   <Navbar/>
   <Home/>
   <Abut/>
   <MyWork/>
   <Contact/>
   <Footer/>
  </div>
  )
}

export default App
