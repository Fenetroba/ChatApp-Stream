import React from "react";
import HeroImg from "../assets/hero.jpg";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <div className="reletive pb-10">
      <img
        src={HeroImg}
        alt="Hero"
        className="w-[600px] sm:h-[87vh] h-2/3 rounded-l-full absolute right-0.5"
      />
      <div className=" absolute top-[50%] sm:left-10">
        <div className="font-extrabold md:text-4xl lg:text-5xl max-sm:top-[79%] text-3xl uppercase">
          HI ! My <span className="text-[var(--three)]">Freind</span> Join Us
        </div>
        <p className=" text-2xl max-sm:text-[16px] w-[60%] text-center max-sm:w-full m-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          repellendus est expedita eligendi Commodi repellendus est expedita
          eligendi ,
        </p>
        <div>
          <Button className="sm:w-[40%] px-9.5 border-0  bg-[var(--two)] rounded-2xl mt-2 text-[18px] cursor-pointer hover:bg-[var(--three)]">
            Continue With Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
