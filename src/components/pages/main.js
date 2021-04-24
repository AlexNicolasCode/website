import React from 'react';
import About from './about';
import Projects from './projects';

export default function Main () {
    return (
        <main className="w-full">
          <article>
            <About />
            <Projects />
          </article>
        </main>
    )
}