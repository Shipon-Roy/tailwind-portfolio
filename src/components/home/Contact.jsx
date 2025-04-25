import React from "react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="px-20">
      <div className=" bg-gray-800  rounded-b-xl p-10 mx-auto mb-[-70px]  relative z-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Let’s discuss your Project
            </h3>
            <p className="my-10 text-gray-400">
              There are many variations of passages of Lorem Ipsu <br />{" "}
              available. but the majority have suffered alte.
            </p>
            <div>
              <div className="flex items-center bg-gray-700 rounded md:w-[400px] px-5 py-2 gap-5 shadow-xl/20">
                <span className="text-3xl text-gray-300">
                  <FaLocationDot />
                </span>

                <div>
                  <h3 className="my-5 text-xl font-bold text-white">
                    Address:
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    Gangachara, Rangpur
                  </p>
                </div>
              </div>
              <div className="flex items-center border border-white  rounded md:w-[400px] px-5 py-2 my-5 gap-5">
                <span className="md:text-3xl text-gray-300">
                  <MdEmail />
                </span>

                <div>
                  <h3 className="my-5 md:text-xl font-bold text-white">
                    My Email:
                  </h3>
                  <p className="text-[14px] md:text-sm text-gray-400">
                    mymail@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center border border-white rounded md:w-[400px] px-5 py-2 gap-5">
                <span className="text-3xl text-gray-300">
                  <FaPhoneVolume />
                </span>

                <div>
                  <h3 className="my-5 text-xl font-bold text-white">
                    Call me now:
                  </h3>
                  <p className="text-[14px] text-gray-400">00-1234 00000</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-2xl text-white mt-10">
                <FaFacebookSquare />
                <FaGithubSquare />
                <FaInstagramSquare />
                <FaTwitterSquare />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-500">
              There are many variations of passages of Lorem Ipsu available,{" "}
              <br /> but the majority have suffered alte.
            </p>
            <form className="max-w-md mx-auto mt-10">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name*
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email*
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="location"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Location
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="budget"
                    id="budget"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="budget"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Budget*
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="subject"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Subject*
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="massage"
                  name="massage"
                  id="massage"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="massage"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Massage*
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
