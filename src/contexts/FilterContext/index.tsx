import { createContext, ReactNode, useState, useEffect, Dispatch } from 'react';
import { ProjectsProps, TechProps } from '../../../pages';

type FilterContextData = {
  allProjects: ProjectsProps[],
  setAllProjects: Dispatch<ProjectsProps[]>,
  allTechs: TechProps[],
  setAllTechs: Dispatch<TechProps[]>,
  projects: ProjectsProps[], 
  setProjects: Dispatch<ProjectsProps[]>,
  techs: TechProps[], 
  setTechs: Dispatch<TechProps[]>,
  filterByTech: (tech: string) => void ,
  changeBtnToActive: (tech: string) => void
}

export const FilterContext = createContext({} as FilterContextData)

type FilterContextProviderProps = {
    children: ReactNode;
}

export function FilterContextProvider({ children }: FilterContextProviderProps) { 
  const [projects, setProjects] = useState<ProjectsProps[]>();
  const [techs, setTechs] = useState<TechProps[]>();

  const [allProjects, setAllProjects] = useState<ProjectsProps[]>();
  const [allTechs, setAllTechs] = useState<TechProps[]>();

  useEffect(() => {
    const setAllProps = async () => {
      if (allProjects == undefined && allTechs == undefined) {
        setAllProjects(projects)
        setAllTechs(techs)
      }
    }

    setAllProps()
  }, [projects])

  const filterByTech = (tech: string) => {
    let currentProjects;
    if (tech == "All") {
        currentProjects = allProjects;
    } else {
        currentProjects = allProjects.filter((project) => {
          const techsFromProject = project.details.techs.map((tech: string) => tech.toLowerCase())
          return techsFromProject.includes(tech.toLowerCase())
        });  
    }

    setProjects(currentProjects)
    changeBtnToActive(tech)
  };

  const changeBtnToActive = (tech: string) => {
    const currentTechs = allTechs.map((techFromAllTechs) => {
        const isActive = tech == techFromAllTechs.name ? true : false;

        return {
            name: techFromAllTechs.name,
            active: isActive
        } 
    })

    setTechs(currentTechs)
  }


  return (
    <FilterContext.Provider 
      value={{ 
        allProjects,
        setAllProjects,
        allTechs,
        setAllTechs,
        projects, 
        setProjects,
        techs, 
        setTechs,
        filterByTech,
        changeBtnToActive
      }}>
      { children }
    </FilterContext.Provider>
  )
}