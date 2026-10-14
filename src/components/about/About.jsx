import React from 'react';
import classes from './About.module.css';
import RoundedButton from '../assets/roundedButton/RoundedButton';
const About = () => {
  return (
    <div className={classes.About} id="about">
      <div className={classes.AboutTextContainer}>
        <h1 className={classes.AboutHeading}>About Me</h1>
        <p className={classes.AboutText}>
          Hi ! I am Aryan, I am a frontend developer using React JS and Next JS
          for development . I have worked and developed my skills in web
          development and React JS for 3+ years. I have worked with various
          animation libraries such as Framer Motion , React Spring , GSAP etc .
          I have completed by{' '}
          <span className={classes.HighlightedText}>
            Bachelor of Technology
          </span>{' '}
          from{' '}
          <span className={classes.HighlightedText}>
            Kalinga Institute of Industrial Technology
          </span>
          .<br />
          <br /> Being a Computer Science Engineer, I also have experience with
          C, C++, Python, JavaScript , Node Js , Express Js etc and I am up for
          projects requiring to integrate them .
        </p>
        <div className={classes.Button}>
          <RoundedButton
            text="Resume"
            link="https://drive.google.com/file/d/15i3QxQKx-H-X3rTQqOrJDOma1o7WB1P9/view?usp=drive_link"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
