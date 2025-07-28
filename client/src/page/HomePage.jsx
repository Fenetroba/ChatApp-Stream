import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

const HomePage = ({auth ,user, button}) => {
   
  return (
    <div>

      <Header auth={auth} user={user} button={button} />
      <Hero/>
      <Footer/>
    </div>
  )
}

export default HomePage