import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaNode } from 'react-icons/fa';
import { SiBootstrap, SiMongodb, SiTailwindcss } from 'react-icons/si';
import {DiJavascript1} from 'react-icons/di';


const Myskills = () => {

    return (
        <div className='mb-16 mt-40'>
            <div className='text-center mb-2'>
                <h1 className='text-4xl mt-2 text-green-500 font-bold pb-3'>My skills</h1>
            </div>


            <div className="container px-6 pb-8 mx-auto">
                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {/* html  */}
                    <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                        <FaHtml5 className='text-gray-300 text-9xl ml-10 hover:text-blue-600'></FaHtml5>
                        <button className="w-full rounded-xl px-4 py-2 mt-10 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-sky-400   focus:outline-none  focus:ring-opacity-80">
                            Advanced
                        </button>
                    </div>

                    {/* css */}
                    <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                        <FaCss3 className='text-gray-300 text-9xl ml-10 hover:text-blue-600'></FaCss3>
                        <button className="w-full rounded-xl px-4 py-2 mt-10 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-sky-400   focus:outline-none  focus:ring-opacity-80">
                            Advanced
                        </button>
                    </div>

                    {/* bootstrap */}
                    <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                        <SiBootstrap className='text-gray-300 text-9xl ml-10 hover:text-blue-600'></SiBootstrap>
                        <button className="w-full rounded-xl px-4 py-2 mt-10 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-sky-400   focus:outline-none  focus:ring-opacity-80">
                            Advanced
                        </button>
                    </div>

                    {/* tailwind */}
                    <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                        <SiTailwindcss className='text-gray-300 text-9xl ml-10 hover:text-blue-600'></SiTailwindcss>
                        <button className="w-full rounded-xl px-4 py-2 mt-10 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-sky-400   focus:outline-none  focus:ring-opacity-80">
                            Advanced
                        </button>
                    </div>

                    {/* meraki baki  */}

                    {/* javascript */}
                    <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                        <DiJavascript1 className='text-gray-300 text-9xl ml-10 hover:text-blue-600'></DiJavascript1>
                        <button className="w-full rounded-xl px-4 py-2 mt-10 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-sky-400   focus:outline-none  focus:ring-opacity-80">
                        Intermediate
                        </button>
                    </div>

                    {/* react */}
                    <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                        <FaReact className='text-gray-300 text-9xl ml-10 hover:text-blue-600'></FaReact>
                        <button className="w-full rounded-xl px-4 py-2 mt-10 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-sky-400   focus:outline-none  focus:ring-opacity-80">
                        Intermediate
                        </button>
                    </div>

                    {/* node */}
                    <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                        <FaNode className='text-gray-300 text-9xl ml-10 hover:text-blue-600'></FaNode>
                        <button className="w-full rounded-xl px-4 py-2 mt-10 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-sky-400  focus:outline-none  focus:ring-opacity-80">
                        Beginner
                        </button>
                    </div>

                    {/* mongo */}
                    <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                        <SiMongodb className='text-gray-300 text-9xl ml-10 hover:text-blue-600'></SiMongodb>
                        <button className="w-full rounded-xl px-4 py-2 mt-10 tracking-wide text-black text-2xl font-semibold capitalize transition-colors duration-300 transform bg-sky-400   focus:outline-none  focus:ring-opacity-80">
                        Beginner
                        </button>
                    </div>






                </div>
            </div>
        </div>
    );
};

export default Myskills;