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

function App() {
  return (
    
    <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>} />
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
