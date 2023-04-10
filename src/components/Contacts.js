import React from "react";

function Contacts() {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <form className="max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-500">
            Contact
          </p>
          <p className="py-4">
            // Submit the form below or shoot me an email -
            nabeelnashidnmk@gmail.com
          </p>
        </div>
        <input
          placeholder="Name"
          className="p-2 my-4 bg-[#ccd6f6] text-gray-600"
          type="text"
        />
        <input
          placeholder="Email"
          className="p-2 my-4 bg-[#ccd6f6] text-gray-600"
          type="text"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 text-gray-600"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 px-4 hover:bg-pink-500 hover:border-pink-500 hover:px-4 py-3 my-8 rounded-sm mx-auto hover:ease-out duration-200">Let's talk</button>
      </form>
    </div>
  );
}

export default Contacts;
