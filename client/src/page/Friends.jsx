import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Friends = () => {
  const friend = [
    {
      id: 1,
      Fullname: "Alice Johnson",
      nativeLanguage:"nativeLanguage",
      location:'location',
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      Fullname: "Bob Smith",
    
      nativeLanguage:"nativeLanguage",
      location:'location',
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];
  return (
    <div className="flex m-10 ">
      <Button className="flex bg-[var(--two)] cursor-pointer hover:bg-[var(--one)] ">
        <p>friend Request </p>
        <Plus />
      </Button>

      <div className="shadow-2xl w-full">
        {friend.length === 0 ? (
          <div className="text-center text-gray-500">
            <h2>No friend yet</h2>
            <p>
              connect with language partner below to start practising together !
            </p>
          </div>
        ) : (
          <div>
              <h2 className="text-center m-2 text-2xl font-bold">My Friends</h2>
            <div className="flex space-x-1.5  items-center p-10">
              {friend.map((myfriend) => (
                <div className="bg-[var(--one)] rounded-2xl text-[var(--five)] p-10">
                  <Avatar className='mb-4'>
                    <AvatarImage src={myfriend.avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="m-2">{myfriend.Fullname}</p>
                  <div className="flex gap-10">
                    <p className="bg-[var(--three)] px-4 text-white p-1 rounded-2xl">{myfriend.nativeLanguage}</p>
                    <p className="bg-[var(--two)] px-4 text-white p-1 rounded-2xl">{myfriend.location}</p>
                  </div>
                  <Button className='w-full mt-3 border-1 cursor-pointer rounded-2xl'>Message</Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;
