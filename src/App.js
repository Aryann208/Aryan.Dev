import './App.css';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Section from './components/section/Section';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="App">
      {/*     <Parallax pages={4}>
        <motion.div className="progress-bar" style={{ scaleX }}></motion.div>

        <Header />

        <ParallaxLayer offset={1} speed={1.5}>
          <About />
        </ParallaxLayer>
        <Section />
        <ParallaxLayer offset={2} speed={0.5}>
          <Projects />
        </ParallaxLayer>
        <Section />
        <ParallaxLayer offset={3} speed={1.5}>
          <Navigation />
        </ParallaxLayer>

        <Footer />
  </Parallax>*/}
      <Header />

      <Navigation />
      <Projects />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
