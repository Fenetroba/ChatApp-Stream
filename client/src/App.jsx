import { Button } from "./components/ui/button"
import {Route, Routes} from 'react-router-dom'
import HomePage from "./page/HomePage"
import Loginpage from "./page/Loginpage"
import SignUp from "./page/SignUp"

import ChatPage from "./page/ChatPage"
import Notification from "./page/Notification"
import OnBoarding from "./page/OnBoarding"
import CallPage from "./page/CallPage"
import Switch from "./components/Switch"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/chat" element={<ChatPage/>} />
      <Route path="/notification" element={<Notification/>} />
      <Route path="/onboarding" element={<OnBoarding/>} />
      <Route path="/call" element={<CallPage/>} />

    </Routes>
   
    </>
  )
}

export default App
