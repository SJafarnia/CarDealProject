import React from 'react'
import AboutUsComponent from '../modules/about/AboutUsComponent'
import Navbar from '../layout/nav/Navbar'

function AboutUs() {
  return (
    <>
      <Navbar main="false" />
      <AboutUsComponent />
    </>
  )
}

export default AboutUs