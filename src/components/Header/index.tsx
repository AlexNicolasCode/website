export default function Header() {
	return (
		<header>
			<ul className="h-14">
	            <li 
	            	className="float-right p-2 mr-6 mt-2 border-2 border-black hover:bg-black hover:text-gray-100 transition duration-500 ease-in-out text-base"
	            >
	            	<a href="#contact">Contact Me</a>
	            </li>
	            <li 
	            	className="float-right mr-4 my-4 text-gray-500 hover:text-black" 
	            >
	            	<a href="#about">About</a>
	            </li>
	        </ul>
        </header>
	)
}