import React from "react";
import dash from "../assets/dashboard.jpg";
import login from "../assets/login.png";
import payment from "../assets/payment.png";
import weather from "../assets/wetherApp.png";
import certificate from "../assets/certificate.png";
import website from "../assets/website.png";

function Works() {
  return (
    <div name="work" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"> */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-500">
            Work
          </p>
          <p className="py-6">//Check out my Works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${weather})` }}
            className="brightness-90 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React js project
              </span>
              <div>
                <a href="https://nabeelweatherfinder.netlify.app/">
                  <button
                    className="text-center rounded-lg px-3 py-2 m-3
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>

                <a href="https://github.com/Nabeel-Nashid/weatherApp">
                  <button
                    className="text-center rounded-lg px-3 py-2 m-3
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${certificate})` }}
            className="brightness-90 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React js project
              </span>
              <div>
                <a href="">
                  <button
                    className="text-center rounded-lg px-3 py-2 m-3
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>

                <a href="https://github.com/Nabeel-Nashid/cms">
                  <button
                    className="text-center rounded-lg px-3 py-2 m-3
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${website})` }}
            className="brightness-90 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React js project
              </span>
              <div>
                <a href="https://sambleresponsivewebsite.netlify.app/">
                  <button
                    className="text-center rounded-lg px-3 py-2 m-3
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>

                <a href="https://github.com/Nabeel-Nashid/sampleWebsite">
                  <button
                    className="text-center rounded-lg px-3 py-2 m-3
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
