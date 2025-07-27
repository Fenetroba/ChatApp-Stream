import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { useNavigate } from "react-router-dom";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { register } from "@/Store/AuthSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState({
    Fullname: "",
    email: "",
    password: "",
  });
  const SignUpHandler = async (e) => {
    e.preventDefault();

const result = await dispatch(register(userData));
    // Reset userData after registration


    if (result.payload?.success || result.meta?.requestStatus === "fulfilled") {
       setUserData({
      Fullname: "",
      email: "",
      password: "",
    });
toast(result.payload?.message || "Registration attempted", {
      style: { background: "#7fe635", color: "#fff" },
    });
      navigate("/onboarding");
    }
      else{
          toast(result.payload?.message || "Registration attempted", {
      style: { background: "#570808", color: "#fff" },
    });
      }
  

  };  
  return (
    <section>
      <Header />
      <div className="magicpattern flex justify-evenly items-center">
        <form className="flex flex-col space-y-6 shadow-lg w-[360px] p-10 [400px] bg-gradient-to-br from-[var(--three)] to-[var(--four)] rounded-2xl"
          onSubmit={SignUpHandler}>
          <h2 className="text-2xl font-bold text-white">Create an account</h2>

          <input
            type="text"
            placeholder=" Fullname"
            className="p-1.5 rounded-[10px] bg-white bg-"
            value={userData.Fullname}
            onChange={(e) =>
              setUserData({ ...userData, Fullname: e.target.value })
            }
            
          />

          <input
            type="email"
            placeholder=" Email"
            className="p-1 rounded-[10px] bg-white bg-"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder=" Password"
            className="p-1.5 rounded-[10px] bg-white bg-"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <Button className="bg-black rounded-[10px] text-white cursor-pointer hover:bg-gray-700" type="submit">
            Sign Up
          </Button>
          <Button className="bg-gray-200 rounded-[10px] text-black cursor-pointer hover:bg-gray-300">
            Continue With Google <FaGoogle />
          </Button>
          <p className="text-white">
            Don't have an account?{" "}
            <span className="text-[var(--two)] cursor-pointer">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
