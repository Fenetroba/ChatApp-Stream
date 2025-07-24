
import { useEffect } from 'react'
import './App.css'
import io from 'socket.io-client'
const socket=io.connect('http://localhost:5000/')
function App() {
  const click=()=>{
 socket.emit('send',{mess:"helow"})
  }

  useEffect(()=>{
socket.on('receve',(data)=>{
  alert(data.mess)
})

  },[socket])
  return (
    <>
     <button onClick={click}> ok</button>
    </>
  )
}

export default App
