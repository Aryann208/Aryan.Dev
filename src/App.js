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
      <Parallax pages={5}>
        <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
        <ParallaxLayer offset={0} speed={1.5}>
          <Header />
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={1.5}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={0.5}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={1.5}>
          <Navigation />
        </ParallaxLayer>
        <ParallaxLayer offset={4.5} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
