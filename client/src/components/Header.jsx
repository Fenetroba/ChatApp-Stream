import React from "react";
import { Button } from "./ui/button";
import Switch from "./Switch";

const Header = () => {
  return (
    <div className="bg-[var(--four)] text-white flex justify-between items-center p-4">
      <div className="flex items-center gap-2 justify-between w-full">
        <p className="text-xl font-bold">Friend Chat</p>
        <div className="flex items-center gap-2">
          <Button className="rounded-2xl px-10  cursor-pointer hover:bg-[var(--three)]">Join Us</Button>
          <Button className="rounded-2xl px-10 border cursor-pointer hover:bg-[var(--three)]">Login</Button>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Header;
