import React from 'react';
import Filter from '../project/filter';

export default function Projects() {
  return (
        <section id="projects" className="h-full mt-10" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-full text-center tracking-widest text-2xl">
              <h2>PROJECTS</h2>
              <div className="bg-black w-16 h-0.5 flex mx-auto"></div>
          </div>
          <Filter />
        </section>
      )
}