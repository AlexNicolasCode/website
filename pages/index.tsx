import Head from 'next/head'
import ScrollTop from '../components/scroll-top/scroll-top'
import Projects from '../components/sections/projects'
import Introduction from '../components/sections/introduction'
import About from '../components/sections/about'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Alex Nicolas | Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <ScrollTop />
        <Introduction />
        <About />
        <Projects />
        <section id="contact" className="text-black mt-10 flex items-center justify-center w-full h-12 border-t">
          <p>Contact: contato.alexnicolas@gmail.com</p> 
        </section>
      </main>

      <footer className="bg-black text-white flex items-center justify-center w-full h-12">
          Developed by Alex Nicolas
      </footer>
    </div>
  )
}
