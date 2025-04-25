import React from "react";
import { FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="grid grid-cols-3 justify-between h-[200px] items-center bg-gray-700 text-gray-400 text-center pt-16 px-20 relative z-0">
      <a href="/">
        <h1 className="flex gap-3 text-[#43D9AD] text-[18px] md:text-[32px] font-['Inter'] md:font-['Segoe_UI_Historic'] font-normal line-[22px] md:text-white items-center">
          <FaCode className="text-orange-400" /> SHIPON ROY
          <FaCode className="text-orange-400" />
        </h1>
      </a>
      <ul className=" md:flex gap-5">
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
      </ul>
      <h1 className="  bg-gray-700 text-gray-400   ">
        © Copyright 2025 Shipon Roy
      </h1>
    </div>
  );
}
