import Image from 'next/image';
import profilePhoto from '../../../../public/profilePhoto.jpg';
import { Social } from "../../About/Social"
import { Description } from "../../About/Description"

export default function About () {
    return (
      <section id="about">
        <div className="bg-gray-200 h-screen w-full py-32">
          <div className="bg-tranparent w-100 flex justify-center h-96 md:block md:bg-black md:mx-52 md:w-4/6">
            <div className="hidden transition duration-500 ease-in-out transform hover:scale-110 ml-36 my-24 w-40 h-40 float-left md:block">
              <Image src={profilePhoto} alt="Alex Nicolas foto" />
            </div>

            <div className="animate-fade-in-down h-4/5 my-24 text-center text-black w-1/2 md:text-gray-300 md:float-right md:h-1/3 md:mr-36 md:w-1/3">
              <Description />
              <Social />
            </div>
          </div>
        </div>
      </section>
    )
}
