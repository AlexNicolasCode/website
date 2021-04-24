import React from 'react';
import './App.css';
import Projects from './components/pages/projects';
import ScrollToTop from './components/scroll-top/scroll-top';
import Header from './components/pages/header';
import About from './components/pages/about';
import ContactUs from './components/pages/contact';

export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <About />
      <Projects />
      <ContactUs />
    </div>
  );
}
