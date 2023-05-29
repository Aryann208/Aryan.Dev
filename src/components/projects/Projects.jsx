import React from 'react';
import classes from './Projects.module.css';
import TechStack from '../techStack/TechStack';
const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cum accusamus. Voluptas repudiandae, quae error beatae aperiam dolor id consectetur dolor sit amet consectetur adipisicing elit. Tempora, cum accusamus. Voluptas repudiandae, quae error beatae aperiam dolor id consectetur.';
const Projects = ({ title = 'Project Title', description = `${text}` }) => {
  return (
    <div className={classes.Project}>
      <div className={classes.Description}>
        <div>
          <span className={classes.Heading}>Title </span>
          <p className={classes.RegularText}>{title}</p>
        </div>
        <div className={classes.TechStackContainer}>
          <TechStack />
        </div>
        <div>
          <span className={classes.Heading}>Description </span>
          <p className={classes.RegularText}>{description}</p>
        </div>
      </div>
      <div className={classes.ProjectViewContainer}></div>
    </div>
  );
};

export default Projects;
