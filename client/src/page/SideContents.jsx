import {
  BellPlus,
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Settings2,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageLoad from "@/components/Animation/PageLoad";
import { GetMessages } from "@/Store/MessageSlice";
import { useEffect } from "react";

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
  {
    title: "Setting",
    url: "/Setting",
    icon: Settings2,
  },
];

function App_Sidebar({ button, user }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { myFriend } = useSelector((state) => state.friends);
  const friends = myFriend.friends;
  if (!user) {
    <div>
      <PageLoad />
    </div>;
  }
  const Profile = user?.profilePic || "";
  const FullName = user?.Fullname || "";
  const dispatch=useDispatch()
  const chatHandler=(userId)=>{
      console.log(userId)
    dispatch(GetMessages(userId))
    
    }

    useEffect(() => {
      
      chatHandler()
    }, [dispatch]);

  return (
    <Sidebar>
      <SidebarContent className="bg-[var(--four)] text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-10">
            {button}{" "}
            <span className="ml-10 text-[16px] text-white">Freind Chat</span>
          </SidebarGroupLabel>
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

      <div className="h-[70vh] bg-[var(--one)] overflow-auto">
        {friends ? (
          friends.map((frendsList) => (
            <div
            onClick={()=>chatHandler(frendsList._id)}
              key={frendsList._id}
              className="flex  hover:bg-gray-200 hover:scale-105 duration-200 rounded-2xl cursor-pointer  m-2  space-x-2.5 "
            >
              <Avatar className="mb-4">
                <AvatarImage src={frendsList.profilePic} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="">
                <p className="text-black">{frendsList.Fullname}</p>
                <p></p>
              </div>
            </div>
          ))
        ) : (
          <div>hi</div>
        )}
      </div>
      <div className="flex items-cente space-x-3 mt-2">
        <Avatar className="mb-4">
          <AvatarImage src={Profile} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>@{FullName}</p>
      </div>
    </Sidebar>
  );
}

export default App_Sidebar;
