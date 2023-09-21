import React from 'react'
import AboutInfo1 from '../Components/AboutInfo1'
import '../scss/AboutPage.scss'
import CommonBanner from '../Components/CommonBanner'

function AboutPage() {
  return (
   <>
     <CommonBanner title="About Us" />
    <div className='aboutInfo'>
     

      <AboutInfo1/>
    
    </div>
   </>
  )
}

export default AboutPage
