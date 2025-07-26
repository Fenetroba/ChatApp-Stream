import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[var(--three)] fixed  w-full bottom-0 p-5 flex justify-around">
      <p className=" text-white font-bold text-2xl">FREIND'S CHAT </p>
      <div className="flex gap-2 text-white">
        <span>
          <Facebook />
        </span>
        <span>
          <Instagram />
        </span>
        <span>
          <Twitter />
        </span>
        <span>
          <Linkedin />
        </span>
      </div>
    </div>
  );
};

export default Footer;
