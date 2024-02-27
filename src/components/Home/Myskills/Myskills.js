import React from "react";
import { FaHtml5, FaCss3, FaReact, FaNode } from "react-icons/fa";
import { SiBootstrap, SiMongodb, SiTailwindcss } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const Myskills = () => {
  return (
    <div className="mb-16 mt-40">
      <div className="text-center mb-2">
        <h1 className="text-4xl mt-2 text-green-500 font-bold pb-3">
          My skills
        </h1>
      </div>

      <div className="container px-6 pb-8 mx-auto">
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* html  */}
          <div className="w-full p-8  text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <FaHtml5 className=" text-9xl ml-10 text-blue-400"></FaHtml5>
            <h1 className="text-2xl text-gray-300 mt-1">HTML5</h1>
            <button className="w-full rounded-xl px-4 py-2 mt-5 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform  bg-gradient-to-r from-green-400 to-sky-400  focus:outline-none  focus:ring-opacity-80">
              Advanced
            </button>
          </div>

          {/* css */}
          <div className="w-full p-8  text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <FaCss3 className=" text-9xl ml-10 text-blue-400"></FaCss3>
            <h1 className="text-2xl text-gray-300 mt-1">CSS3</h1>
            <button className="w-full rounded-xl px-4 py-2 mt-5 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-400 to-sky-400   focus:outline-none  focus:ring-opacity-80">
              Advanced
            </button>
          </div>

          {/* bootstrap */}
          <div className="w-full p-8  text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <SiBootstrap className=" text-9xl ml-10 text-blue-400"></SiBootstrap>
            <h1 className="text-2xl text-gray-300 mt-1">Bootstrap</h1>
            <button className="w-full rounded-xl px-4 py-2 mt-5 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-400 to-sky-400   focus:outline-none  focus:ring-opacity-80">
              Advanced
            </button>
          </div>

          {/* tailwind */}
          <div className="w-full p-8  text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <SiTailwindcss className=" text-9xl ml-10 text-blue-400"></SiTailwindcss>
            <h1 className="text-2xl text-gray-300 mt-1">Tailwind CSS</h1>
            <button className="w-full rounded-xl px-4 py-2 mt-5 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-400 to-sky-400   focus:outline-none  focus:ring-opacity-80">
              Advanced
            </button>
          </div>

          {/* javascript */}
          <div className="w-full p-8  text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <DiJavascript1 className="text-9xl ml-10 text-blue-400"></DiJavascript1>
            <h1 className="text-2xl text-gray-300 mt-1">Javascript</h1>
            <button className="w-full rounded-xl px-4 py-2 mt-5 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-400 to-sky-400   focus:outline-none  focus:ring-opacity-80">
              Intermediate
            </button>
          </div>

          {/* react */}
          <div className="w-full p-8  text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <FaReact className="text-9xl ml-10 text-blue-400"></FaReact>
            <h1 className="text-2xl text-gray-300 mt-1">React JS</h1>
            <button className="w-full rounded-xl px-4 py-2 mt-5 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-400 to-sky-400   focus:outline-none  focus:ring-opacity-80">
              Intermediate
            </button>
          </div>

          {/* meraki baki  */}
          <div className="w-full p-8  text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <img
              className="w-32 h-32 ml-10"
              src="https://i.ibb.co/rHkc18k/meraki-ui-removebg-preview.png"
              alt=""
            />
            <h1 className="text-2xl text-gray-300 mt-1">Meraki UI</h1>
            <button className="w-full rounded-xl px-4 py-2 mt-5 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-400 to-sky-400   focus:outline-none  focus:ring-opacity-80">
              Beginner
            </button>
          </div>

          {/* typescript  */}
          <div className="w-full p-8  text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <h1 className="text-9xl text-blue-400">TS</h1>
            <h1 className="text-2xl text-gray-300 mt-1">Typescript</h1>
            <button className="w-full rounded-xl px-4 py-2 mt-5 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-400 to-sky-400   focus:outline-none  focus:ring-opacity-80">
              Beginner
            </button>
          </div>

          {/* node */}
          <div className="w-full p-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <FaNode className=" text-9xl ml-10 text-blue-400"></FaNode>
            <h1 className="text-2xl text-gray-300 mt-1">Node JS</h1>
            <button className="w-full rounded-xl px-4 py-2 mt-5  tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-400 to-sky-400  focus:outline-none  focus:ring-opacity-80">
              Beginner
            </button>
          </div>

          {/* mongo */}
          <div className="w-full p-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <SiMongodb className=" text-9xl ml-10 text-blue-400"></SiMongodb>
            <h1 className="text-gray-300 mt-1 text-2xl">MongoDB</h1>
            <button className="w-full rounded-xl px-4 py-2 mt-5 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-400 to-sky-400   focus:outline-none  focus:ring-opacity-80">
              Beginner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myskills;
