import React from 'react';
import classes from './Skills.module.css';
import Html from '../assets/images/html.svg';
import Css from '../assets/images/CSS-3.svg';
import Reactlogo from '../assets/images/React-05.svg';
import Javascriptlogo from '../assets/images/Javascript-031.svg';
import NextJslogo from '../assets/images/Nextjs-01.svg';
const Skills = () => {
  return (
    <div className={classes.Skills}>
      <div className={classes.Heading}>Skills & Tech Stack</div>
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
      </div>
    </div>
  );
};

export default Skills;
