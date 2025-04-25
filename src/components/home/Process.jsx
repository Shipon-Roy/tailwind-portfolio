import React from "react";
import { MdEventNote } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { LuChartLine } from "react-icons/lu";
import { MdOutlineLunchDining } from "react-icons/md";

const cards = [
  {
    icon: <MdEventNote />,
    title: "1. Research",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    icon: <LuChartLine />,
    title: "2. Analyze",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    icon: <FaEdit />,
    title: "3. Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    icon: <MdOutlineLunchDining />,
    title: "4. Launch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
];

export default function Process() {
  return (
    <div id="process" className="py-24 px-20 bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <h3 className="text-3xl font-bold text-white">Work Process</h3>
          <p className="mt-10 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet, <br /> Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla purus arcu,
            varius eget velit non.
          </p>
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non,
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {cards.map((card, index) => (
            <div key={index}>
              <div
                className={`career-card-${index + 1} rounded bg-gray-600 p-5`}
              >
                <span className="text-3xl font-bold text-gray-300">
                  {card.icon}
                </span>
                <h3 className="my-5 text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-[14px] text-gray-400">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
