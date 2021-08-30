import Image from 'next/image';
import GitHub from '../../../../public/icons/github.svg';
import LinkedIn from '../../../../public/icons/linkedin.svg';
import Gmail from '../../../../public/icons/gmail.svg';

export function Social() {
	return (
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
	)
}