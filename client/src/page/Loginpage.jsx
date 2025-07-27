
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoginUser } from '@/Store/AuthSlice'
import {} from 'react-router-dom'
const Loginpage = () => {
 const [userData , setUserData]=useState({
  email:'',
  password:''
 })

const dispatch = useDispatch();
const navigate = useNavigate();
  const LoginHandler = async () => {
    const result = await dispatch(LoginUser(userData));
    // Reset userData after login
     toast(result.payload?.message || "Login attempted", {
      style: { background: "#333", color: "#fff" },
    });

    if (result.payload?.success || result.meta?.requestStatus === "fulfilled") {
       setUserData({
      email: "",
      password: "",
    });
    toast(result.payload?.message || "Registration attempted", {
      style: { background: "#7fe635", color: "#fff" },
    });
      navigate("/onboarding");
    }   else{
          toast(result.payload?.message || "Registration attempted", {
      style: { background: "#570808", color: "#fff" },
    });
      }
  
 }


  return (
   <section>

        <Header/>
        <div className='magicpattern flex justify-evenly items-center'>
          <div className='flex flex-col space-y-6 shadow-lg w-[360px] p-10 [400px] bg-gradient-to-br from-[var(--three)] to-[var(--four)] rounded-2xl'>
                <h2 className='text-2xl font-bold text-white'>Login</h2>

            <input type="text" placeholder=' Email' className='p-1 rounded-[10px] bg-white bg-' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            <input type="password" placeholder=' Password' className='p-1.5 rounded-[10px] bg-white bg-' value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
            <p className='text-[var(--two)] text-sm'>Forgot Password?</p>

            <Button className='bg-black rounded-[10px] text-white cursor-pointer hover:bg-gray-700' onClick={LoginHandler}>Login</Button>
            <Button className='bg-gray-200 rounded-[10px] text-black cursor-pointer hover:bg-gray-300'>Continue With Google <FaGoogle/></Button>
            <p className='text-white'>Don't have an account? <span className='text-[var(--two)] cursor-pointer'><Link to='/signup'>Sign Up</Link></span></p>
          </div>
        

          
        </div>
       
      </section>
  )
}

export default Loginpage