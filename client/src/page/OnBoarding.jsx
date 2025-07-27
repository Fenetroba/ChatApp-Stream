import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ONBoarding } from "@/Store/AuthSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const OnBoarding = () => {
const dispatch=useDispatch();
  const [onboarding,setOnboarding]=useState({
    Fullname:"",
    email:"",
    Bio:"",
    NativeLanguage:"",
    LearningLanguage:"",
    Location:""

  })
  const onboardingHandler = async (e) => {
    e.preventDefault();
    // Here you would typically send the onboarding data to your backend
    console.log("Onboarding data submitted:", onboarding);
    dispatch(ONBoarding(onboarding));
  }
  return (
    <div className="magicpattern ">
      <Header />
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome to Onboarding
      </h1>
     
      <div className="flex justify-center mt-6">
      
      </div>

      <div className="flex justify-center items-center mt-4  rounded-xl max-sm:m-5">
        <form className="bg-[var(--four)]/90 p-15 text-black flex flex-col space-y-4 rounded-2xl shadow-lg " onSubmit={onboardingHandler}>
          {/* <img src="" alt="" /> */}
          <div className="flex flex-col space-y-4">
            Full Name   <input type="text" placeholder="Fullname" className="bg-white" value={onboarding.Fullname} onChange={(e) => setOnboarding({ ...onboarding, Fullname: e.target.value })} />
            Email  <input type="email" placeholder="email" className="bg-white" value={onboarding.email} onChange={(e) => setOnboarding({ ...onboarding, email: e.target.value })} />
          </div>
          Bio <input type="text" placeholder="bio" className="bg-white" value={onboarding.Bio} onChange={(e) => setOnboarding({ ...onboarding, Bio: e.target.value })} />
          <div>
            Native Language <input type="text" placeholder="nativeLanguage" className="bg-white" value={onboarding.NativeLanguage} onChange={(e) => setOnboarding({ ...onboarding, NativeLanguage: e.target.value })} />
            Learning Language <input type="text" placeholder="learningLanguage" className="bg-white" value={onboarding.LearningLanguage} onChange={(e) => setOnboarding({ ...onboarding, LearningLanguage: e.target.value })} />
          </div>
          Location <input type="text" placeholder="location" className="bg-white" value={onboarding.Location} onChange={(e) => setOnboarding({ ...onboarding, Location: e.target.value })} />
          <Button type="submit" className="bg-[var(--two)] text-white p-2 rounded-lg hover:bg-[var(--two2m)] transition-colors">
            Complete Onboarding
          </Button>
        </form>
      </div>
    </div>
  );
};
export default OnBoarding;
