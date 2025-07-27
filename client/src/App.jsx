
import { Button } from "./components/ui/button"
import {Route, Routes} from 'react-router-dom'
import HomePage from "./page/HomePage"
import Loginpage from "./page/Loginpage"
import SignUp from "./page/SignUp"
import { Toaster } from "./components/ui/sonner";

import ChatPage from "./page/ChatPage"
import Notification from "./page/Notification"
import OnBoarding from "./page/OnBoarding"
import CallPage from "./page/CallPage"

function App() {

  return (
    <div>
 <Toaster />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/chat" element={<ChatPage/>} />
      <Route path="/notification" element={<Notification/>} />
      <Route path="/onboarding" element={<OnBoarding/>} />
      <Route path="/call" element={<CallPage/>} />

    </Routes>
   
    </div>
  )
}

export default App
