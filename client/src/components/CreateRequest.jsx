import { Button } from "@/components/ui/button";
import { Plus, UserPlus2 } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus } from "lucide";

const friend = [
  {
    id: 1,
    Fullname: "Alice Johnson",
    nativeLanguage: "nativeLanguage",
    location: "location",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    Fullname: "Bob Smith",

    nativeLanguage: "nativeLanguage",
    location: "location",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];
const CreateRequest = () => {
  return (
    <div className="flex max-sm:flex-col sm:m-10 ">
      <div className="shadow-2xl w-full">
        <div>
          <h2 className="text-center m-2 text-2xl font-bold">
            Meet New Friends
          </h2>
          <div className="flex max-sm:flex-col  gap-2  items-center p-10">
            {friend.map((myfriend) => (
              <div
                key={myfriend.id}
                className="bg-[var(--one)] rounded-2xl text-[var(--five)] p-10"
              >
                <Avatar className="mb-4">
                  <AvatarImage src={myfriend.avatar} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="m-2">{myfriend.Fullname}</p>
                <div className="flex gap-10">
                  <p className="bg-[var(--three)] px-4 text-white p-1 rounded-2xl">
                    {myfriend.nativeLanguage}
                  </p>
                  <p className="bg-[var(--two)] px-4 text-white p-1 rounded-2xl">
                    {myfriend.location}
                  </p>
                </div>
                <Button className="w-full mt-3 bg-[var(--two)] cursor-pointer rounded-2xl">
                  Send Friend Request <UserPlus2/>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;
