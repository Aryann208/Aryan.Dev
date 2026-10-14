import {
  MotionConfig,
  m,
  LazyMotion,
  domAnimation,
  useScroll,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import AboutV2 from './components/aboutV2/AboutV2';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Resume from './components/resume/Resume';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const reducedMotion = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <div className="App">
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          {!reducedMotion && (
            <m.div
              className="progress-bar"
              style={{ scaleX }}
              aria-hidden="true"
            />
          )}
          <Navbar />
          <main id="main" tabIndex={-1}>
            <Header />
            <AboutV2 />
            <Experience />
            <Projects />
            <Skills />
            <Resume />
          </main>
          <Footer />
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
