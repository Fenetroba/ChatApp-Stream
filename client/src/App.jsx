
import { Button } from "./components/ui/button"
import {Route, Routes} from 'react-router-dom'
import HomePage from "./page/HomePage"
import Loginpage from "./page/Auth/Loginpage"
import SignUp from "./page/Auth/SignUp"
import { Toaster } from "./components/ui/sonner";

import ChatPage from "./page/ChatPage"
import Notification from "./page/Notification"
import OnBoarding from "./page/OnBoarding"
import CallPage from "./page/CallPage"
import { useEffect, useState } from "react"
import { Me } from "./Store/AuthSlice"
import { useDispatch, useSelector } from "react-redux"
import { Moon, SunDim } from "lucide-react"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
const {isAuthenticated ,user} = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Me());

  }, [dispatch, isAuthenticated]);

    
       const button= <Button onClick={toggleDarkMode} className="bg-[var(--two)] cursor-pointer text-white hover:bg-[var(--two)] rounded-full">
          {darkMode ? <SunDim /> : <Moon />}
        </Button>
     

  return (
    <div className={`dark ${darkMode ? "dark" : "light"}`}>
    
      <Toaster />
    <Routes>
      <Route path="/" element={<HomePage auth={isAuthenticated} user={user} button={button} />} />
      <Route path="/login" element={<Loginpage user={user} isAuthenticated={isAuthenticated} />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/chat" element={<ChatPage/>} />
      <Route path="/notification" element={<Notification/>} />
      <Route path="/onboarding" element={<OnBoarding user={user}/>} />
      <Route path="/call" element={<CallPage/>} />

    </Routes>
   
    </div>
  )
}

export default App
