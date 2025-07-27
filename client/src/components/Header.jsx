import React from "react";
import { Button } from "./ui/button";
import Switch from "./Switch";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[var(--four)] text-white flex justify-between items-center p-4">
      <div className="flex items-center gap-2 justify-between w-full">
        <Link className="text-xl font-bold" to="/">Friend Chat</Link>
        <div className="flex items-center gap-2">
          <Button className="rounded-2xl px-10  cursor-pointer hover:bg-[var(--three)]">
            <Link to="/signup">Join Us</Link>
          </Button>
          <Button className="rounded-2xl px-10 border cursor-pointer hover:bg-[var(--three)]">
         <Link to='/login'>Login</Link>
          </Button>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Header;
