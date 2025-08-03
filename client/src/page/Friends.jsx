import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CreateRequest from "@/components/CreateRequest";
import { useSelector } from "react-redux";


const Friends = () => {
  const {myFriend ,isLoading}=useSelector(state=>state.friends)
  const friends=myFriend.friends
  console.log(myFriend)
  return (
    <div className="flex max-sm:flex-col sm:m-10 ">
 

      <div className="shadow-2xl w-full">
        {myFriend.length === 0 ? (
          <div className="text-center text-gray-500">
            <h2>No friend yet</h2>
            <p>
              connect with language partner below to start practising together !
            </p>
          </div>
        ) : (
          <div>
              <h2 className="text-center m-2 text-2xl font-bold">My Friends</h2>
            <div className="flex max-sm:flex-col  gap-2  items-center p-10">
              {friends.map((myfriend) => (
                <div key={myfriend.id} className="bg-[var(--one)] rounded-2xl text-[var(--five)] p-10">
                  <div className="flex gap-3 items-center">
                    <Avatar className='mb-4'>
                    <AvatarImage src={myfriend.avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="m-2">{myfriend.Fullname}</p>
                  </div>
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

     
         <CreateRequest/>
     
      </div>
      
    </div>
  );
};

export default Friends;
