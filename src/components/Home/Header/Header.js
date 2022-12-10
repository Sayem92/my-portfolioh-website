import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <section className="my-16">
                <div className="container grid grid-cols-1 md:grid-cols-2">
                    
                    <div className="flex justify-center ">
                        <img src="https://i.ibb.co/3CR1d7z/IMG-20220211-WA0000.jpg" alt="" className="rounded-lg object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>

                    <div className="p-4 pt-16">
                        <h1 className="text-5xl font-bold">
                            Welcome! </h1>
                        <h1 className="mt-4 text-4xl font-bold text-green-500">
                            My name is MD. Sayem Miah  </h1>
                        <h1 className=" my-4 text-xl font-bold">
                        MERN Stack Developer  </h1>
        
                      <a href='https://drive.google.com/file/d/1AzYdgsQ2yNNYW8lsPwU2J7i8GpYYfRIF/view?usp=share_link'>
                       <button className='btn btn-success text-white'>My resume</button> 

                      </a>
                    </div>
                </div>
            </section>
        
    );
};

export default Header;