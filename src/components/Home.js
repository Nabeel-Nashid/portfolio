import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          NABEEL NASHID
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a React Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a React developer specializing in building exceptional digital
          experiences. Currently, I'm focused on building responsive full-stack
          web applications.
        </p>

        <div>
          <button className="text-[#ccd6f6] border-2 px-6 py-3 my-3 flex items-center hover:bg-pink-500 hover:border-pink-500 hover:ease-out duration-300">
            View more
            <span className="hover:rotate-90 duration-300">
              <BsArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
