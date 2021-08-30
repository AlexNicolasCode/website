import Link from "next/link";
import { useState, useEffect } from "react";
import { useFilter } from "../../../hooks/useFilter"
import { ProjectsProps } from "../../../../pages";

export function Projects() {
    const { projects } = useFilter();
    const [currentProjects, setCurrentProjects] = useState<ProjectsProps[]>();

    useEffect(() => {
        if (projects != undefined) {
            setCurrentProjects(projects)
        }
    }, [projects])

    return (
        <div className="mt-3 flex flex-wrap text-center justify-center lg:mx-20">
            {currentProjects != undefined && currentProjects.map((project, index) => {
                return (
                    <div 
                        key={index} 
                        className="bg-black text-white h-1/4 w-full lg:w-1/2 lg:h-1/2"
                        style={{backgroundImage: `url(${project.image.url})`}}
                    >
                        <article className="project hover:animate-fade-in-down transition duration-300 text-center py-16 opacity-100 md:opacity-0 hover:opacity-100 shadow-md">
                            <h3 
                                className="transition duration-500 ease-in-out transform hover:scale-110 text-xl"
                            >
                                {project.name}
                            </h3>
                            <ul className="flex flex-row justify-center">
                                {project.details.techs.map((tech, index) => {
                                    return (
                                        <li
                                            key={index} 
                                            className="m-2   text-sm"
                                        >
                                            {tech}
                                        </li> 
                                    )
                                })}
                            </ul>

                            <Link
                                href={project.url}
                            >
                                <button
                                    className="border-2 border-white mt-6 py-1 px-2 focus:outline-none hover:bg-black hover:border-0 hover:bg-white hover:text-black transition duration-500 ease-in-out transform hover:scale-110 text-base"
                                >
                                    See More
                                </button>                                    
                            </Link>
                        </article>
                    </div>
                )
            })}
        </div>
    )
} 