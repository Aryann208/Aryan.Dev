import { useEffect, useRef, useState } from 'react';
import classes from './Navbar.module.css';
import Logo from '../assets/images/whiteLogo.svg';
import ResumeLink from '../resume/ResumeLink';
const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const nav = useRef(null);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current.focus();
      }
      if (event.type === 'pointerdown' && !nav.current.contains(event.target))
        setOpen(false);
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', close);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('pointerdown', close);
    };
  }, [open]);
  return (
    <header className={classes.header} ref={nav}>
      <nav
        className={`section-shell ${classes.nav}`}
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className={classes.brand}
          aria-label="aryan.dev/ — Aryan Trivedi, home"
        >
          <img src={Logo} width="36" height="36" alt="" />
          <span>
            aryan.dev<span className={classes.dot}>/</span>
          </span>
        </a>
        <button
          ref={toggle}
          className={classes.toggle}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}{' '}
          <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        <div
          id="nav-links"
          className={`${classes.links} ${open ? classes.open : ''}`}
        >
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <ResumeLink onClick={() => setOpen(false)}>Resume</ResumeLink>
          <a
            className={classes.contact}
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
