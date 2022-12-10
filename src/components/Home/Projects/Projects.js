import React from 'react';

const Projects = () => {
    return (
 <section className="">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl text-center text-green-500 font-bold capitalize lg:text-4xl ">My Projects
        </h1>


        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage:`url('https://i.ibb.co/SsJ4BRf/Screenshot-20.png')`}}
                >
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-2xl font-semibold text-white capitalize">Resale Phones Selling Page </h2>

                    <a href='https://sell-phones-bd.web.app/'>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Live Demo</p>
                    </a>

                    <a href='https://github.com/Sayem92/sell-phones-bd-client-side'>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Github Link</p>
                    </a>
                </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage:`url('https://i.ibb.co/pfD49T8/Screenshot-21.png')`}}
                >
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-2xl font-semibold text-white capitalize">Photography Services Page</h2>

                    
                    <a href='https://candid-captures.web.app/'>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Live Demo</p>
                    </a>

                    <a href='https://github.com/Sayem92/candid-captures-client-side'>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Github Link</p>
                    </a>
                </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              
                style={{ backgroundImage: `url('https://i.ibb.co/VgSCqJ9/Screenshot-22.png')` }}
                >
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-2xl font-semibold text-white capitalize">Learning Tutorials Page</h2>

                    <a href='https://the-smart-tutor.web.app/'>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Live Demo</p>
                    </a>

                    <a href='https://github.com/Sayem92/the-smart-tutor-client-side'>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Github Link</p>
                    </a>

                </div>
            </div>
        </div>
    </div>
</section>
     
    );
};

export default Projects;