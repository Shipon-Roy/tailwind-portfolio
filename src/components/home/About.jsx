import React from "react";

export default function About() {
  return (
    <div id="about" className="py-24 px-20 bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
        <div>
          <h3 className="text-3xl font-bold text-white">What I do?</h3>
          <p className="my-10 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, <br /> varius eget velit non, laoreet imperdiet orci. Mauris
            ultrices eget lorem <br /> ac vestibulum. Suspendis imperdiet,
          </p>
          <p className="my-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Nulla purus arcu, varius eget velit non.
          </p>
          <button
            type="button"
            className="bg-gray-700 px-5 py-2 text-white rounded"
          >
            Sey Hello
          </button>
        </div>
        <div>
          <div className="bg-gray-700 rounded md:w-[500px] px-5 py-2  shadow-xl/20 border-l-4 border-sky-400 ">
            <h3 className="my-5 text-xl font-bold text-white">
              User Experience (UX)
            </h3>
            <p className="text-[14px] text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>
          <div className="bg-gray-700 rounded md:w-[500px] px-5 py-2 my-4">
            <h3 className="my-5 text-xl font-bold text-white">
              User Interface (UI)
            </h3>
            <p className="text-[14px] text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>
          <div className="bg-gray-700 rounded md:w-[500px] px-5 py-2 ">
            <h3 className="my-5 text-xl font-bold text-white">
              Web Development
            </h3>
            <p className="text-[14px] text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
