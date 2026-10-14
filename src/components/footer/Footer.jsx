import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../../data/profile';
import ResumeLink from '../resume/ResumeLink';
import Logo from '../assets/images/whiteLogo.svg';
import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer
      id="contact"
      className={classes.Footer}
      aria-labelledby="contact-heading"
    >
      <div className="section-shell">
        <div className={classes.Topline}>
          <p className="eyebrow">Have something in mind?</p>
          <a
            href="#home"
            aria-label="Aryan Trivedi, back to top"
            className={classes.Logo}
          >
            <img src={Logo} width="62" height="45" alt="" loading="lazy" />
          </a>
        </div>
        <div className={classes.Contact}>
          <h2 id="contact-heading">
            Let’s talk
            <br />
            <span>engineering.</span>
          </h2>
          <div className={classes.ContactBody}>
            <p>
              I’m interested in full-stack engineering roles where I can own
              meaningful product work, solve difficult problems, and build with
              a thoughtful team.
            </p>
            <a className={classes.Email} href={`mailto:${profile.email}`}>
              {profile.email}
              <span aria-hidden="true">↗</span>
            </a>
            <div className={classes.Actions}>
              <a
                className="button button-primary"
                href={`mailto:${profile.email}`}
              >
                Get in touch <span aria-hidden="true">↗</span>
              </a>
              <ResumeLink
                className={`button button-outline ${classes.Resume}`}
              />
            </div>
          </div>
        </div>
        <nav className={classes.Links} aria-label="Contact and social links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn aria-hidden="true" /> LinkedIn{' '}
            <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> GitHub{' '}
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href={profile.macrointel}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore MacroIntel <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <div className={classes.Bottomline}>
          <p>© {new Date().getFullYear()} Aryan Trivedi</p>
          <p>Designed & built with care.</p>
          <a href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
