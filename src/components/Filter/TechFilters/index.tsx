import { useState, useEffect } from "react";
import { useFilter } from "../../../hooks/useFilter";

export function TechFilters() {
    const { techs, filterByTech } = useFilter();
    const [currentTechs, setCurrentTechs] = useState([{name: "", active: false}])

    useEffect(() => {
        if (techs != undefined) {
            setCurrentTechs(techs)
        }
    }, [techs])
    
    return (
        <div className="animate-fade-in-down hidden transition duration-300 flex space-x-6 mt-8 h-8 justify-center text-5x1 md:flex md:w-full text-base">
            {currentTechs.map((tech, index) => {
                const isActive = tech.active ? "active" : "";
                
                return (
                    <button key={index}
                        className={`btn py-1 px-2 focus:outline-none hover:bg-black hover:text-gray-300 text-base ${isActive}`}
                        onClick={() => filterByTech(tech.name ?? "All")}
                    >
                        {tech.name}
                    </button>
                )
            })}
        </div>
    )
} 