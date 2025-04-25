import React from "react";
import img1 from "../../assets/projects/img1.jpg";
import img2 from "../../assets/projects/img2.jpg";
import img3 from "../../assets/projects/img3.jpg";
import img4 from "../../assets/projects/img4.jpg";
import img5 from "../../assets/projects/img5.jpg";
import img6 from "../../assets/projects/img6.jpg";

const projects = [
  {
    img: img1,
    category: "BLOCKCHAIN PROJECT",
    title: "ChainFund",
    description:
      "A decentralized crowdfunding platform powered by smart contracts.",
  },
  {
    img: img2,
    category: "BLOCKCHAIN PROJECT",
    title: "MetaLease",
    description:
      "Blockchain-based solution for secure digital leasing and asset rentals.",
  },
  {
    img: img3,
    category: "BLOCKCHAIN PROJECT",
    title: "BlockCerts",
    description:
      "Tamper-proof certificate issuance and verification on the blockchain.",
  },
  {
    img: img4,
    category: "BLOCKCHAIN PROJECT",
    title: "DeTrust Vault",
    description:
      "A non-custodial DeFi wallet with built-in trustless escrow services.",
  },
  {
    img: img5,
    category: "BLOCKCHAIN PROJECT",
    title: "NFTicket",
    description:
      "NFT-powered event ticketing system to prevent fraud and scalping.",
  },
  {
    img: img6,
    category: "BLOCKCHAIN PROJECT",
    title: "DAOgenda",
    description:
      "A governance platform enabling transparent DAO decision-making and voting.",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="py-20 px-20 bg-[#0c1a23]">
      <div data-aos="fade-up" className="text-center ">
        <h1 className="text-white text-2xl font-bold ">Projects</h1>
        <p className="text-gray-500 mt-5">
          There are many variations of passages of Lorem Ipsum available, <br />{" "}
          but the majority have suffered alteration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 mt-20 text-white">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-[200px] w-full"
                src={project.img}
                alt=""
              />
            </a>
            <div className="p-5 hover:bg-gray-600 duration-1000">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.category}
              </p>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Case Study
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          More Project
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
