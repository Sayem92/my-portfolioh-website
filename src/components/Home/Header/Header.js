import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const Header = () => {
    return (
        <section className="my-16">
            <div className="container grid grid-cols-1 md:grid-cols-2">

                <div className="flex justify-center ">
                    <img src="https://i.ibb.co/3CR1d7z/IMG-20220211-WA0000.jpg" alt="" className="rounded-lg object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>

                <div className="p-4 pt-16">
                    <h1 className="text-5xl font-bold text-white">
                        Welcome! </h1>
                    <h1 className="my-4 text-4xl font-bold text-green-500">
                        My Name is MD. Sayem Miah  </h1>


                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: 'Red Hat Display',
                            color: '#d61ed9',
                            fontWeight: 700,
                            fontSize: '1.5em',
                        }}
                        startDelay={1000}
                        cursorColor="#3F3D56"
                        multiText={[
                            'MERN Stack Developer',
                            'Web Developer',
                            'Frontend Developer',
                            'JavaScript Developer',
                        ]}
                        multiTextDelay={2000}
                        typeSpeed={30}
                    />

                    <a href='https://drive.google.com/file/d/1AzYdgsQ2yNNYW8lsPwU2J7i8GpYYfRIF/view?usp=share_link'>
                        <button className='mt-4 btn btn-success text-black  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>My resume</button>

                    </a>
                </div>
            </div>
        </section>

    );
};

export default Header;