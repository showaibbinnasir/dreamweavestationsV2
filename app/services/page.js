import React from 'react'
import OurServices from '../components/OurServices/OurServices'
import Coordinators from '../components/Coordinators/Coordinators'
import ContactUs from '../components/ContactUs/ContactUs'

export default function Services() {
  return (
    <div>
      <div className='my-10'>
        <OurServices></OurServices>
      </div>
      <div>
        <Coordinators></Coordinators>
      </div>
      
    </div>
  )
}
