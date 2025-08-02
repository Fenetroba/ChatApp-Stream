import { BellPlus, Calendar, Home, Inbox, Search, Settings, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/chat",
    icon: Home,
  },
  {
    title: "Friends",
    url: "/friends",
    icon: User,
  },
  {
    title: "Notification",
    url: "/notification",
    icon: BellPlus,
  },

]

 function App_Sidebar({button}) {
  return (

    
    <Sidebar>
      <SidebarContent className='bg-[var(--three)] text-white'>
        <SidebarGroup >
          <SidebarGroupLabel className='mb-10'>{button} <span className="ml-10 text-[16px] text-white">Freind Chat</span></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default App_Sidebar