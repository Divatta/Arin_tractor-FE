import React from 'react'
import AdminPanel from './Pages/AdminPanel'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './Pages/Blogs'
import LatestBlog from './Components/LatestBlog'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import BlogPage from './Pages/BlogPage'
import Footer from './Components/Footer'
import AboutPage from './Pages/AboutPage'
import Clients from './Pages/Clients'
import ContactPage from './Pages/ContactPage'
import Shipping from './Pages/Shipping'
import Package from './Pages/Package'
import Pickup from './Pages/Pickup'
import DoorToDoor from './Pages/DoorToDoor'
import WareHouse from './Pages/WareHouse'
import ImagesPage from './Pages/ImagesPage'
import VideoPage from './Pages/VideoPage'

function App() {
  return (
    
    <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/services/shipping' element={<Shipping/>} />
          <Route path='/services/package' element={<Package/>} />
          <Route path='/services/pick-up' element={<Pickup/>} />
          <Route path='/services/door-to-door' element={<DoorToDoor/>} />
          <Route path='/services/warehouse' element={<WareHouse/>} />
          <Route path='/media/images' element={<ImagesPage/>} />
          <Route path='/media/video' element={<VideoPage/>} />
          <Route path='/clients' element={<Clients/>} />
          <Route path='/contact' element={<ContactPage/>} />
            <Route path='/adminpanel' element={<AdminPanel/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/latestBlogs' element={<BlogPage/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
