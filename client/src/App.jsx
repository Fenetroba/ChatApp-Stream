
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
import { useEffect } from "react"
import { Me } from "./Store/AuthSlice"
import { useDispatch, useSelector } from "react-redux"

function App() {
const {isAuthenticated ,user} = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Me());
   
  }, []);
 console.log("auth", user);
   

  return (
    <div >
 <Toaster />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Loginpage user={user} isAuthenticated={isAuthenticated} />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/chat" element={<ChatPage/>} />
      <Route path="/notification" element={<Notification/>} />
      <Route path="/onboarding" element={<OnBoarding user={user} isAuthenticated={isAuthenticated} />} />
      <Route path="/call" element={<CallPage/>} />

    </Routes>
   
    </div>
  )
}

export default App
