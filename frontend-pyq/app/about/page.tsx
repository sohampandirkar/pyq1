"use client";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-black font-sans p-4 dynamic-gradient">      

      {/* Navbar */}
      <nav className="w-full flex justify-center fixed top-4 z-50">
        <div className="flex items-center justify-between bg-gray-100 rounded-full px-6 py-3 shadow-lg w-[80%] max-w-3xl">
          <h1 className="text-lg font-bold flex items-center">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-lg mr-2">PyQ</span> Analyzer
          </h1>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-black">About Us</Link>
          </div>
        </div>
      </nav>

      {/* About Me Card */}
      <div className="relative z-10 mt-30 bg-gray-100 p-3 rounded-2xl shadow-lg flex w-full max-w-3xl border border-gray-300 cursor-default">
        
        {/* Left Section: Image & Name */}
        <div className="w-1/2 flex flex-col items-center justify-center text-black rounded-l-lg">
          <img
            src="/profilepic.jpg"
            alt="Your Name"
            className="w-60 h-60 rounded-full"
          />
          {/* <h2 className="mt-4 text-2xl font-semibold">Soham Pandirkar</h2> */}
        </div>

        {/* Right Section: Bio */}
        <div className="w-2/3 flex flex-col justify-center p-6">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-400 inline-block text-transparent bg-clip-text">About Me</h2>
          <p className="mt-2 text-gray-700">
            Hi, I'm <a href="https://soham-pandirkar.web.app/" target="_blank"
            className="bg-gradient-to-r from-blue-600 to-purple-400 bg-[length:100%_3px] bg-no-repeat bg-bottom">
            <span className="text-black">Soham Pandirkar</span>
            </a> , a passionate developer building innovative web solutions.
            I love working on <span className=" font- italic hover:text-blue-600">frontend frameworks</span> and creating <span className=" font- italic hover:text-blue-600">user-friendly applications</span>.
            In my free time, I enjoy exploring new technologies in domains of AI and Machine Learning.
          </p>
          <p>You can connect with me on&nbsp;
          <a href="https://www.instagram.com/sohampandirkar/" target="_blank" className="bg-gradient-to-r from-blue-600 to-purple-400 bg-[length:100%_3px] bg-no-repeat bg-bottom">Instagram</a> or&nbsp;
          <a href="https://www.linkedin.com/in/soham-pandirkar-53a070298/" target="_blank" className="bg-gradient-to-r from-purple-400 to-purple-600 bg-[length:100%_3px] bg-no-repeat bg-bottom" >LinkedIN</a>
          </p>
        </div>
      </div>
      <footer className="relative z-10 mt-30 w-full text-center py-4">
        <p className="text-white">© 2025 PyQ Analyzer. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
