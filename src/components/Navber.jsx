import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navber() {
  const [icon, setIcon] = useState(false);

  const handleIcon = () => {
    setIcon(!icon);
  };
  return (
    <nav>
      <div className="fixed flex w-full h-[60px] justify-between items-center mx-auto border-b-2 border-green-400 md:border-none bg-[#162028] md:bg-[#1F2937  text-white px-20">
        <a href="/">
          <h1 className="bg-sky-300 rounded-full py-1 px-3 text-2xl font-bold">
            S
          </h1>
        </a>
        <ul className="hidden md:flex gap-5">
          <li>
            <a href={"/"}>Home</a>
          </li>
          <li>
            <a href={"#about"}>About</a>
          </li>
          <li>
            <a href={"#process"}>Process</a>
          </li>
          <li>
            <a href={"#projects"}>Projects</a>
          </li>
          <li>
            <a href={"#Services"}>Services</a>
          </li>
          <li>
            <a href={"#contact"}>Contact</a>
          </li>
          <li className="bg-gray-700 px-3 py-1 rounded">
            <a target="_blank" href={"/"}>
              Resume
            </a>
          </li>
        </ul>
        <div onClick={handleIcon} className="block md:hidden text-[#43D9AD]">
          {icon ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            icon
              ? "fixed items-center right-0 shadow-md w-full h-52 text-center md:3/4 bg-[#1a2120]  md:w-3/4 overflow-hidden md:hidden top-14 text-sm duration-500"
              : "ease-in-out duration-500 fixed top-14 right-[-100%]"
          }
        >
          <li className="mt-2">
            <a className="p-4 hover:bg-slate-500 hover:text-white" href={"/"}>
              Home
            </a>
          </li>
          <li className="mt-2">
            <a
              className="p-4 hover:bg-slate-500 hover:text-white"
              href={"about"}
            >
              About
            </a>
          </li>
          <li className="mt-2">
            <a
              className="p-4  hover:bg-slate-500 hover:text-white"
              href={"process"}
            >
              Process
            </a>
          </li>
          <li className="mt-2">
            <a
              className="p-4  hover:bg-slate-500 hover:text-white"
              href={"projects"}
            >
              Projects
            </a>
          </li>
          <li className="mt-2">
            <a
              className="p-4  hover:bg-slate-500 hover:text-white"
              href={"services"}
            >
              Services
            </a>
          </li>
          <li className="mt-2">
            <a
              className="p-4  hover:bg-slate-500 hover:text-white"
              href={"contact"}
            >
              Contact
            </a>
          </li>
          <li className="mt-2">
            <a
              target="_blank"
              href={"/"}
              className="p-4  hover:bg-slate-500 hover:text-white"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
