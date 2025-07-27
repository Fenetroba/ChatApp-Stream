import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { register } from "@/Store/AuthSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState({
    Fullname: "",
    email: "",
    password: "",
  });
  const SignUpHandler = async () => {
dispatch(register(userData));
    // Reset userData after registration
    setUserData({
      Fullname: "",
      email: "",
      password: "",
    });

  };  
  return (
    <section>
      <Header />
      <div className="magicpattern flex justify-evenly items-center">
        <div className="flex flex-col space-y-6 shadow-lg w-[360px] p-10 [400px] bg-gradient-to-br from-[var(--three)] to-[var(--four)] rounded-2xl">
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
            type="text"
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

          <Button className="bg-black rounded-[10px] text-white cursor-pointer hover:bg-gray-700" onClick={SignUpHandler}>
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
        </div>
      </div>
    </section>
  );
};

export default SignUp;
