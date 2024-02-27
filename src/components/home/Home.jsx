import React from 'react'
import classes from './home.module.css'
import Categories from '../categories/Categories'
import Cities from '../cities/Cities'
import Destinations from '../destination/Destinations'
import Testimonials from '../Testimonial/Testimonials'
import Newsletter from '../newsletter/Newsletter'

import Hero from '../hero/Hero'

function Home() {
  return (
    <div className={classes.container}>
       <Hero />
       <Cities/>
       <Destinations/>
       <Categories />
       <Testimonials/>
       <Newsletter/>
    
    </div>
  )
}

export default Home