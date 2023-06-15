import React from 'react';
import classes from './Skills.module.css';
import Html from '../assets/images/html.svg';
import Css from '../assets/images/CSS-3.svg';
import Reactlogo from '../assets/images/React-05.svg';
import Javascriptlogo from '../assets/images/Javascript-031.svg';
import NextJslogo from '../assets/images/Nextjs-01.svg';
import Clogo from '../assets/images/C_Logo.png';
import Cpplogo from '../assets/images/C++.svg';
import Tailwindlogo from '../assets/images/Tailwind_CSS_Logo.svg';
import MUIlogo from '../assets/images/Material-ui-01.svg';
import Nodelogo from '../assets/images/Node-JS-02.svg';
import Pythonlogo from '../assets/images/Python-04.svg';
import Expresslogo from '../assets/images/express.svg';
import Framerlogo from '../assets/images/Framer-01.svg';
import Githublogo from '../assets/images/github.svg';
import Mongologo from '../assets/images/mongodb.svg';
const Skills = () => {
  return (
    <div className={classes.Skills}>
      <div className={classes.Heading}>Skills & Tools</div>
      <div className={classes.SkillsContainer}>
        <div className={classes.SkillImage}>
          <img src={Html} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={Css} alt="" className={classes.SkillImage}></img>
        </div>

        <div className={classes.SkillImage}>
          <img src={Javascriptlogo} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={Reactlogo} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={NextJslogo} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={Nodelogo} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={Expresslogo} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={Mongologo} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={Githublogo} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={Framerlogo} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={Tailwindlogo} alt="" className={classes.SkillImage}></img>
        </div>

        <div className={classes.SkillImage}>
          <img src={MUIlogo} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={Clogo} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={Cpplogo} alt="" className={classes.SkillImage}></img>
        </div>
        <div className={classes.SkillImage}>
          <img src={Pythonlogo} alt="" className={classes.SkillImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Skills;
