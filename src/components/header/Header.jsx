import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowDownRight, FiArrowUpRight, FiMail } from 'react-icons/fi';
import classes from './Header.module.css';
import InfiniteScroll from '../assets/infiniteScroll/InfiniteScollAnimation';
import ResumeLink from '../resume/ResumeLink';
import { profile } from '../../data/profile';
export default function Header() {
  return (
    <section id="home" aria-labelledby="hero-name" className={classes.hero}>
      <div className={classes.intro}>
        <p className={`eyebrow ${classes.kicker}`}>
          Interfaces. Systems. Everything between.
        </p>
        <h1 id="hero-name">
          Aryan
          <br className={classes.nameBreak} /> Trivedi
          <span className={classes.period}>.</span>
        </h1>
        <p className={classes.role}>
          <span aria-hidden="true">{'</ '}</span>Full Stack Engineer
          <span aria-hidden="true">{' >'}</span>
        </p>
        <h2 className={classes.headline}>
          Building products
          <br />
          across the stack.
        </h2>
        <p className={classes.description}>
          React interfaces, Node.js services, and the architecture that connects
          them. Three years of hands-on work across enterprise identity and AI
          document applications.
        </p>
        <div className={classes.actions}>
          <a href="#projects" className="button button-primary">
            View projects <FiArrowDownRight aria-hidden="true" />
          </a>
          <ResumeLink className={`button button-outline ${classes.resume}`} />
        </div>
        <div className={classes.socials}>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> GitHub{' '}
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn aria-hidden="true" /> LinkedIn{' '}
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email Aryan Trivedi">
            <FiMail aria-hidden="true" /> Email
          </a>
        </div>
      </div>
      <div className={classes.visual}>
        <div className={classes.visualLabel}>
          <span className="eyebrow">A connected stack</span>
          <span aria-hidden="true">01 — ∞</span>
        </div>
        <InfiniteScroll />
        <p className={classes.visualNote}>
          Thoughtful interfaces.
          <br />
          Dependable foundations.
        </p>
        <a href="#about" className={classes.scroll}>
          A little about me <FiArrowDownRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
