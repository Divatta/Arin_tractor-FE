import React from 'react'
import AboutInfo1 from '../Components/AboutInfo1'
import '../scss/AboutPage.scss'
import CommonBanner from '../Components/CommonBanner'
import KnowMore from '../Components/KnowMore'

function AboutPage() {
  return (
   <>
     <CommonBanner title="About Us" />
    <div className='aboutInfo'>
     

      <AboutInfo1/>
    
    </div>
    <KnowMore/>
   </>
  )
}

export default AboutPage
