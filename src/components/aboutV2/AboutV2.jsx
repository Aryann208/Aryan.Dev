import React from 'react';
import classes from './AboutV2.module.css';
const AboutV2 = () => {
  return (
    <div className={classes.AboutContainer}>
      <div className={classes.Title}>About </div>
      <div className={classes.Description}>
        <p>
          {`Aryan is a skilled frontend developer specializing in React JS and Next JS. He has honed his web development skills and gained expertise in React JS. Aryan has also worked extensively with animation libraries such as Framer Motion, React Spring, and GSAP. `}
          <br />
          <br />
          {`He holds a Bachelor of Technology degree from Kalinga Institute of Industrial Technology, where he received a solid foundation in computer science engineering. As a Computer Science Engineer, Aryan is well-versed in languages such as C, C++, Python, JavaScript, as well as frameworks like Node.js and Express.js. He is capable of integrating these technologies into projects as required.`}
          <br />
          <br />

          {`If you have any inquiries or need assistance, feel free to contact Aryan. He is dedicated to providing help and support in frontend development.`}
          <div className={classes.btnContainer}>
            <a
              className={classes.a}
              target="_blank"
              href="https://drive.google.com/file/d/15i3QxQKx-H-X3rTQqOrJDOma1o7WB1P9/view?usp=drive_link"
            >
              <button className={classes.btn}>Resume</button>
            </a>
            <a className={classes.a} href="#footer">
              <button className={classes.btn}>Contact</button>
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default AboutV2;
