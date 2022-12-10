import React from 'react';
import {AiFillFacebook, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

const Contact = () => {
    return (
        <section class="bg-gray-900 mt-16">
              <h1 class="text-3xl text-center text-green-500 font-bold capitalize lg:text-4xl py-10">Contact Me
        </h1>
        <div class="container px-6 py-12 mx-auto">
            <div class="lg:flex lg:items-center lg:-mx-6">
                <div class="lg:w-1/2 lg:mx-6">
                    <h1 class="text-3xl font-semibold capitalize text-white lg:text-4xl">
                        Contact me for <br/> more info
                    </h1>
    
                    <div class="mt-6 space-y-8 md:mt-8">
                        <p class="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
    
                            <span class="mx-2 truncate w-72 text-gray-200">
                               Moulvibazar, Bangladesh
                            </span>
                        </p>
    
                        <p class="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
    
                            <span class="mx-2 truncate w-72 text-gray-200">01748-433092</span>
                        </p>
    
                        <p class="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
    
                            <span class="mx-2  truncate w-72 text-gray-200">sayemmiha123@gmail.com</span>
                        </p>
                    </div>
    
                    <div class="mt-6 w-80 md:mt-8">
                        <h3 class="text-gray-200 ">Follow me</h3>
    
                        <div class="flex mt-4 -mx-1.5 ">
                           
                        <a href="https://web.facebook.com/sayemahmed.sum"> <AiFillFacebook className='text-3xl text-gray-200 mr-3'></AiFillFacebook></a>

                        <a href="https://www.linkedin.com/in/sayem-miha/"> <AiFillLinkedin className='text-3xl text-gray-200 mr-3'></AiFillLinkedin></a>

                        <a href="https://github.com/Sayem92"> <AiFillGithub className='text-3xl text-gray-200'></AiFillGithub></a>
                           
                        </div>
                    </div>
                </div>

                {/* form data  */}
    
                <div class="mt-8 lg:w-1/2 lg:mx-6">
                    <div
                        class="w-full px-8 py-10 mx-auto overflow-hidden  rounded-lg shadow-2xl bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                        <h1 class="text-lg font-medium text-gray-200">What do you want to ask</h1>
    
                        <form class="mt-6">
                            <div class="flex-1">
                                <label class="block mb-2 text-sm text-gray-200 ">Full Name</label>
                                <input type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-900 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
    
                            <div class="flex-1 mt-6">
                                <label class="block mb-2 text-sm text-gray-200">Email address</label>
                                <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
    
                            <div class="w-full mt-6">
                                <label class="block mb-2 text-sm text-gray-200">Message</label>
                                <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                            </div>
    
                            <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Contact;