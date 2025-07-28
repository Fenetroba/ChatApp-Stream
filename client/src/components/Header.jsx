import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { LogoutUser } from "@/Store/AuthSlice";
import { useDispatch } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ auth, user, button }) => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const LogoutHandler = () => {
    dispatch(LogoutUser());
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 w-full z-40 bg-[var(--four)] text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-extrabold text-[var(--one)]">
          Friend Chat
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <Button className="px-6 text-[var(--one)] hover:bg-[var(--three)] shadow-lg">
            <Link to="/onboarding">Join Us</Link>
          </Button>

          {auth ? (
            <Button
              className="rounded-2xl px-6 hover:bg-[var(--three)]"
              onClick={LogoutHandler}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button className="rounded-2xl px-6 text-[var(--one)] hover:bg-[var(--three)]">
                Login
              </Button>
            </Link>
          )}

          {user && (
            <Link to="/user/profile">
              <Avatar className="w-10 h-10">
                <AvatarImage src={user.profilePic} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Link>
          )}

          {button && <div className="ml-4">{button}</div>}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-full text-[var(--three)] bg-gradient-to-b from-[var(--one)] to-[var(--three)] z-50 flex flex-col p-6 md:hidden"
          >
            
            <div className="flex justify-between items-center mb-6">
                {button && <div className="ml-4">{button}</div>}
              <h2 className="text-xl text-[var(--three)] font-bold">Friend Chat</h2>
              <button onClick={toggleMenu}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <Link
              to="/onboarding"
              className="py-2 px-3 hover:text-[#62c022] border w-2/5 rounded-2xl mt-14 text-[17px] font-semibold"
              onClick={toggleMenu}
            >
              Join Us
            </Link>
            

            {auth ? (
              <Button
                className="mt-4 bg-[var(--two2m)]  text-[var(--one)] rounded-2xl text-[16px] hover:bg-green-900"
                onClick={() => {
                  LogoutHandler();
                  toggleMenu();
                }}
              >
                Logout
              </Button>
            ) : (
              <Link
                to="/login"
                className="mt-4 text-[16px]"
                onClick={toggleMenu}
              >
                <Button className="bg-[var(--two)] text-[var(--one)] hover:bg-green-900 w-full rounded-2xl">
                  Login
                </Button>
              </Link>
            )}

            {user && (
              <Link to="/user/profile" className="mt-4" onClick={toggleMenu}>
                <Button className="bg-white text-black w-full flex justify-center items-center gap-2 shadow">
                  <User /> Profile
                </Button>
              </Link>
            )}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
