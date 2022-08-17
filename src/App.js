import React from 'react';

// import components
import About from './components/About';
import Brand from './components/Brand';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';


const App = () => {
  return (
    <div className='bg-white relative'>
     <Header />
     <Hero />
     <Brand />
     <About />
     <Skills />
     <Portfolio />
     <Services />
     <Testimonials />
     <Contact />
     <Footer />
     <BackToTop />
     {/* <div style={{height: 'px'}}></div> */}
    </div>
  );
};

export default App;
