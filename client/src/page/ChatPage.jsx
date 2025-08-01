import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import  AppSidebar  from "@/page/AppSidebar.jsx"
const ChatPage = () => {
  return (
    <div>
         <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold">Welcome to the Chat Page</h1>
          <p className="text-gray-600">This is where you can chat with your friends!</p>
        </div>
      </main>
    </SidebarProvider>
    </div>
  )
}

export default ChatPage