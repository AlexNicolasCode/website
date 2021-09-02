import { useEffect } from "react";
import Head from 'next/head';

import ScrollTop from '../src/components/ScrollTop';
import Header from "../src/components/Header";
import ProjectsSection from '../src/components/Sections/Projects';
import Introduction from '../src/components/Sections/Introduction';
import About from '../src/components/Sections/About';
import Contact from '../src/components/Sections/Contact';

import { gql } from "@apollo/client";
import { client } from "../src/services/api";
import { useFilter } from "../src/hooks/useFilter";

export type ProjectsProps = {
    name: string,
    image: {
      url: string
    }
    url: string,
    details: {
      techs: [
        name: string,
        active: boolean
      ]
    }
}

export type TechProps = {
    name: string,
    active: boolean,
}

type FilterProps = {
    allProjects: ProjectsProps[],
    allTechs: TechProps[]
}

export default function Home({ allProjects, allTechs }: FilterProps) {
  const { 
      setProjects,
      setTechs  
  } = useFilter();

  useEffect(() => {
    setProjectsAndTechs()
  }, [])

  const setProjectsAndTechs = () => {
    setProjects(allProjects);
    setTechs(allTechs);
  } 

  return (
    <>
      <Head>
        <title>Alex Nicolas | Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <ScrollTop />
        <Introduction />
        <About />
        <ProjectsSection />
        <Contact />
      </main>

      <footer className="bg-black flex items-center justify-center w-full h-10">
        <article className="text-center text-gray-500 text-sm">
          <p className="text-gray-400 hover:text-gray-300 text-sm">
           Contato.AlexNicolas@gmail.com
          </p>

          <p>Developed by Alex Nicolas</p>
        </article>
      </footer>
    </>
  )
}

export const getStaticProps = async () => {
    const allProjectsFromAPI = await client.query({ query: gql`{
              allProjects {
                name
                url
                image {
                  url
                }
                details
              }
            }` })
    const allProjects: ProjectsProps[] = allProjectsFromAPI.data.allProjects;

    const allTechsFromAPI = await client.query({ query: gql`{
          allTeches {
            name
          }
        }` })
    const techs = allTechsFromAPI.data.allTeches;
    const mainTechs = techs.map((tech) => {
        return {
            name: tech.name,
            active: false
        }
    })
    const allTechs: TechProps[] = [
        {
          name: "All",
          active: true  
        },
        ...mainTechs
    ]

    return {
      props: {
          allProjects,
          allTechs
        },
        revalidate: 60 * 60 * 8
      }
}
