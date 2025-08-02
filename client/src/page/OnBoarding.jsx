import PageLoad from "@/components/Animation/PageLoad";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ONBoarding } from "@/Store/AuthSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const OnBoarding = ({user}) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
 const [onboarding, setOnboarding] = useState({
    Fullname: user?.Fullname || "",
    email: user?.email || "",
    bio: user?.bio || "",
    nativeLanguage: user?.nativeLanguage || "",
    learningLanguage: user?.learningLanguage || "",
    location: user?.location || ""
  });

  if (!user) {
    return <div><PageLoad /></div>;
  }
  
 const onboardingHandler = async (e) => {
  e.preventDefault();

  const result = await dispatch(ONBoarding(onboarding));


  if (result.payload?.success || result.meta?.requestStatus === "fulfilled") {
    setOnboarding({
      Fullname: "",
      email: "",
      Bio: "",
      NativeLanguage: "",
      LearningLanguage: "",
      Location: ""
    });

    toast(result.payload?.message || "Registration successful!", {
      style: { background: "#7fe635", color: "#fff" },
    });

    navigate("/");
  } else {
    const errorMessage =
      result.payload?.message ||
      result.error?.message ||
      "Something went wrong. Please try again.";

    toast(errorMessage, {
      style: { background: "#570808", color: "#fff" },
    });
  }
};


  return (
    <div className="magicpattern ">
   
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome to Onboarding
      </h1>

     
      <div className="flex justify-center mt-6">
      
      </div>

      <div className="flex justify-center items-center mt-4  rounded-xl max-sm:m-5">
        <form className="bg-[var(--four)]/90 p-15 text-black flex flex-col space-y-4 rounded-2xl shadow-lg " onSubmit={onboardingHandler}>
          {/* <img src="" alt="" /> */}
          <div className="flex flex-col space-y-4">
            Full Name   <input type="text" placeholder=""  className="bg-white" value={onboarding.Fullname} onChange={(e) => setOnboarding({ ...onboarding, Fullname: e.target.value })} />
            Email  <input type="email" placeholder=""  className="bg-white" value={onboarding.email} onChange={(e) => setOnboarding({ ...onboarding, email: e.target.value })} />
          </div>
          Bio <input type="text" placeholder="bio" className="bg-white" value={onboarding.bio} onChange={(e) => setOnboarding({ ...onboarding, bio: e.target.value })} />
          <div>
            Native Language <input type="text" placeholder="nativeLanguage" className="bg-white" value={onboarding.nativeLanguage} onChange={(e) => setOnboarding({ ...onboarding, nativeLanguage: e.target.value })} />
            Learning Language <input type="text" placeholder="learningLanguage" className="bg-white" value={onboarding.learningLanguage} onChange={(e) => setOnboarding({ ...onboarding, learningLanguage: e.target.value })} />
          </div>
          Location <input type="text" placeholder="location" className="bg-white" value={onboarding.location} onChange={(e) => setOnboarding({ ...onboarding, location: e.target.value })} />
          <Button type="submit" className="bg-[var(--two)] text-white p-2 rounded-lg hover:bg-[var(--two2m)] transition-colors">
            Complete Onboarding
          </Button>
        </form>
      </div>
    </div>
  );
};
export default OnBoarding;
