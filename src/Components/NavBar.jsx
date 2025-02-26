import { useState } from "react";
import navicon1 from "../assets/nav-icon1.svg";
import navi2 from "../assets/nav-icon2.svg";
import navi3 from "../assets/nav-icon3.svg";
import "../Components/navbar.css";
import "./navbar.css";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 w-[95%] text-white shadow-lg flex items-center justify-between p-4 md:flex-row "
      style={{
        zIndex: 1000,
        background: "linear-gradient(to bottom, #12071f, #12071f)",
      }}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Desktop Name Section (Left Side) */}
      <div className=" heading hidden md:block md:text-3xl md:font-mono md:font-bold md:ml-5 md:mr-5">
        Nimesh Bashitha
      </div>

      {/* Navigation Menu (Centered) */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#12071f] md:relative  md:top-0 md:justify-center md:flex md:flex-row md:gap-6 p-4 md:p-0 transition-all duration-300 flex-1 ${
          menuOpen ? "block bg-purple-900 w-screen p-3 poppins-semibold text-right" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 text-white md:items-center text-xl md:text-3xl font-mono font-light ">
          <a href="#home" className="hover:text-[#AD49E1]">Home</a>
          <a href="#about" className="hover:text-[#AD49E1]">Skills</a>
          <a href="#projects" className="hover:text-[#AD49E1]">Projects</a>
          <a href="#blogs" className="hover:text-[#AD49E1]">Blogs</a>
          <a href="#achievements" className="hover:text-[#AD49E1]">Achievements</a>
          <a href="#contact" className="hover:text-[#AD49E1]">Contact</a>
        </div>
      </div>

      {/* Social Media Icons (Right Side) */}
      <div className="flex flex-row gap-3 items-center md:ml-auto">
        <a href="https://www.linkedin.com/in/nimesh-bashitha-a87b2a33a" target="_blank" className="p-2 border-2 border-gray-900 rounded-full bg-[#AD49E1]">
          <img src={navicon1} alt="LinkedIn" />
        </a>
        <div className="p-2 border-2 border-gray-900 rounded-full bg-[#AD49E1]">
          <img src={navi2} alt="Social 2" />
        </div>
        <div className="p-2 border-2 border-gray-900 rounded-full bg-[#AD49E1]">
          <img src={navi3} alt="Social 3" />
        </div>
      </div>
    </div>
  );
};
