import React from 'react'
import AdminPanel from './Pages/AdminPanel'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './Pages/Blogs'
import LatestBlog from './Components/LatestBlog'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'

function App() {
  return (
    
    <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
            <Route path='/adminpanel' element={<AdminPanel/>} />
            <Route path='/blogs' element={<Blogs/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
