import Image from 'next/image';
import GitHub from '../about/icons/github.svg';
import LinkedIn from '../about/icons/linkedin.svg';
import Gmail from '../about/icons/gmail.svg';
import profilePhoto from '../about/profilePhoto.jpg';

export default function About () {
    return (
      <section id="about" data-aos="fade-up" data-aos-duration="1000">
        <div className="bg-gray-200 h-screen w-full py-32">
          <div className="bg-tranparent w-100 flex justify-center h-96 md:block md:bg-black md:mx-52 md:w-4/6">
            <div className="hidden transition duration-500 ease-in-out transform hover:scale-110 ml-36 my-24 w-40 h-40 float-left md:block">
              <Image src={profilePhoto} alt="Alex Nicolas foto" />
            </div>
            <div className="animate-fade-in-down h-4/5 my-24 text-center text-black w-1/2 md:text-gray-300 md:float-right md:h-1/3 md:mr-36 md:w-1/3">
                <h2 className="text-2xl">Hi!</h2>
                <p className="text-center text-sm md:text-justify">
                  My name is Alex, <strong>I’m front-end
                  developer</strong>. Current, I work with Tailwind
                  CSS, Bootstrap, Reactstrap, Sass, Node.js and React to make
                  my projects.
                </p>
                <div className="flex space-x-14 justify-center mt-9 h-8 w-full">
                    <a href="https://github.com/alexnicolascode">
                      <Image src={GitHub} alt="GitHub Icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/nicolas-alex/">
                      <Image src={LinkedIn} alt="LinkedIn Icon" />
                    </a>
                    <a href="#contact">
                      <Image src={Gmail} alt="Gmail Icon" />
                    </a>
                </div>
            </div>
          </div>
        </div>
      </section>
    )
}
