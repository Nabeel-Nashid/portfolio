import React, { useState } from "react";
import {
  FaTimes,
  FaBars,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGit,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
  const [bar, setBar] = useState(false);
  const handleClick = () => {
    setBar(!bar);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-100">
      <div>logo.png</div>
      <ul className="hidden md:flex">
        <Link to="home" smooth="true" duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth="true" duration={500}>
          <li>About</li>
        </Link>
        <Link to="skills" smooth="true" duration={500}>
          <li>Skill</li>
        </Link>
        <Link to="work" smooth="true" duration={500}>
          <li>Work</li>
        </Link>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!bar ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !bar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li
          className="py-6 text-4x
        "
        >
          Home
        </li>
        <li
          className="py-6 text-4x
        "
        >
          About
        </li>
        <li
          className="py-6 text-4x
        "
        >
          Skill
        </li>
        <li
          className="py-6 text-4x
        "
        >
          Work
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 text-grey-300">
        <ul>
          <li className="mb-3 w-[160px] h-[60px] flex justify-between items-center bg-blue-600 ml-[-100px] hover:ml-[-10px] duration-300">
            <a href="https://www.linkedin.com/in/nabeel-nashid-01008926b" className="flex justify-between items-center w-full ">
              Linked In <FaLinkedin size={"30px"} />
            </a>
          </li>
          <li className="mb-3 w-[160px] h-[60px] flex justify-between items-center bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300">
            <a href="https://github.com/Nabeel-Nashid" className="flex justify-between items-center w-full ">
              Git <AiFillGithub size={"30px"} />
            </a>
          </li>
          <li className="mb-3 w-[160px] h-[60px] flex justify-between items-center bg-[#099c3f] ml-[-100px] hover:ml-[-10px] duration-300">
            <a href="tel:9656346818" className="flex justify-between items-center w-full ">
              Phone <AiFillPhone size={"30px"} />
            </a>
          </li>
          <li className="mb-3 w-[160px] h-[60px] flex justify-between items-center bg-red-500 ml-[-100px] hover:ml-[-10px] duration-300">
            <a href="https://mail.google.com/mail" className="flex justify-between items-center w-full ">
              Mail <FiMail size={"30px"} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
