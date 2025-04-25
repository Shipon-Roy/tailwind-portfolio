import React from "react";
import shipon from "../../assets/shipon.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  return (
    <>
      <div className="md:flex md:items-center text-white bg-[#0c1a23] p-20">
        <div className="mt-10 w-full">
          <h1 className="text-[64px] font-semibold text-[#E5E9F0] font-['Kanit']">
            Shipon Roy
          </h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Hey! I am Shipon Roy",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Hey! I am a Front-end developer",
              1000,
              "Hey! I am a Blockchain developer",
              1000,
              "Hey! I am a Learner",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <p className="text-gray-400 mt-5">
            I'm a Blockchain Developer based in Rangpur, Bangladesh, focused on
            building user-centric solutions across smart contracts, NFTs, and
            DeFi platforms.
          </p>
          <br />
          <a href={"#projects"}>
            <button className="font-['Fira_Code'] border-[#62FBD7] rounded text-white border py-2 px-7 mt-5  cursor-pointer">
              Projects
            </button>
          </a>
          <div className="flex justify-center items-center gap-3 mt-10">
            <div className="bg-[#EDD8FF80] text-black p-5 rounded">
              <h5 className="text-xl font-medium">1 Y.</h5>
              <p>Experience</p>
            </div>
            <div className="bg-[#EDD8FF80] text-black p-5 rounded">
              <h5 className="text-xl font-medium">25+</h5>
              <p>Project Completed</p>
            </div>
            <div className="bg-[#EDD8FF80] text-black p-5 rounded">
              <h5 className="text-xl font-medium">19</h5>
              <p>Happy Client</p>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <img
            src={shipon}
            className="rounded shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto mt-10"
            width={300}
            height={300}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
