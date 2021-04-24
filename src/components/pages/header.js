import React from 'react';

export default function Header () {
    return (
            <header className="h-screen">
                <nav className="w-full h-14 m-0" data-aos="fade-left" data-aos-duration="1000">
                    <a href="#contact"><button className="float-right p-2 mr-6 mt-2 border-2 border-black hover:bg-black hover:text-gray-100 transition duration-500 ease-in-out text-base">Contact Me</button></a>
                    <a className="float-right mr-4 my-4 text-gray-500 hover:text-black" href="#about">About</a>
                </nav>
                <div className="bg-center my-48 text-center" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-3xl"><strong>Hi! My name is Alex</strong></h1>
                    <h2 className="text-2xl">Welcome To My Website</h2>
                  <a href="#projects">
                  <button className="border-2 p-2 border-black mt-4 text-base text-black w-60 hover:bg-black hover:border-0 hover:text-gray-100 transition duration-500 ease-in-out">See My Work</button>
                  </a>
                </div>
            </header>
    );
}