import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

import '../App.css'
import { Link } from 'react-router-dom'

const Loginpage = () => {
  return (
   <section>
        <Header/>
        <div className='magicpattern flex justify-evenly items-center'>
          <div className='flex flex-col space-y-6 shadow-lg w-[360px] p-10 [400px] bg-gradient-to-br from-[var(--three)] to-[var(--four)] rounded-2xl'>
                <h2 className='text-2xl font-bold text-white'>Login</h2>
        
            <input type="text" placeholder=' Email' className='p-1 rounded-[10px] bg-white bg-'/>
            <input type="password" placeholder=' Password' className='p-1.5 rounded-[10px] bg-white bg-'/>
            <p className='text-[var(--two)] text-sm'>Forgot Password?</p>
            
            <Button className='bg-black rounded-[10px] text-white cursor-pointer hover:bg-gray-700'>Login</Button>
            <Button className='bg-gray-200 rounded-[10px] text-black cursor-pointer hover:bg-gray-300'>Continue With Google <FaGoogle/></Button>
            <p className='text-white'>Don't have an account? <span className='text-[var(--two)] cursor-pointer'><Link to='/signup'>Sign Up</Link></span></p>
          </div>
        

          
        </div>
       
      </section>
  )
}

export default Loginpage