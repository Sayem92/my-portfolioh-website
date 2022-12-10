import React from 'react';

const About = () => {
    return (
        <div className='my-16'>
            <div className='text-center'>
                <h3 className='text-2xl text-white'>Get to Know</h3>
                <h1 className='text-4xl mt-2 text-green-500 font-bold'>About Me</h1>
            </div>
            <section className="">
                <div className="container px-6 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-72 rounded-lg lg:h-[36rem]" src="https://i.ibb.co/hDX3hx7/IMG-20220508-WA0000-removebg-preview-removebg-preview.png" alt="" />

                        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 pb-8">

                            <h1 className="text-xl mt-6 text-gray-300  ">
                                My name is MD. Sayem  Miah. I am a junior web developer. Recently I completed my web development course. I have experience with HTML, CSS, JavaScript, React, Node, MongoDB, etc. I completed many Projects using HTML, CSS, JavaScript, React, Node, and MongoDB. My hobby is programming. I want to be a good web Developer.
                            </h1>

                            <div className="grid grid-cols-1 gap-2 mt-6  md:grid-cols-2 lg:grid-cols-3 ">

                                <div className=" ">
                                    <a href='https://github.com/Sayem92'>
                                        <button className='btn btn-success text-black'>Github</button>
                                    </a>
                                </div>

                                <div className="">
                                    <a href='https://www.linkedin.com/in/sayem-miha/'>
                                        <button className='btn btn-success text-black'>LinkedIn</button>
                                    </a>
                                </div>

                                <div className="">
                                    <a href='https://web.facebook.com/sayemahmed.sum'>
                                        <button className='btn btn-success text-black'>FaceBook</button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;