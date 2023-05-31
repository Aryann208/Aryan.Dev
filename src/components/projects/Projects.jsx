import React from 'react';
import classes from './Projects.module.css';
import TechStack from '../techStack/TechStack';
import ProjectHolder from '../projectHolder/ProjectHolder';
const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cum accusamus. Voluptas repudiandae, quae error beatae aperiam dolor id consectetur dolor sit amet consectetur adipisicing elit. Tempora, cum accusamus. Voluptas repudiandae, quae error beatae aperiam dolor id consectetur.';

const Project = [
  {
    title: 'TMDB : Movie & TV Shows Videopedia',
    description:
      'A React JS application which receives is data from TMDB API about movies and TV shows with details such as ratings, cast, trailer etc . Redux Toolkit is used for state management . ',
  },
];
const Projects = () => {
  return (
    <div className={classes.Project} id="project">
      <ProjectHolder
        repoLink={'https://github.com/Aryann208/TMDB'}
        webLink={'https://tmdb-phi.vercel.app/'}
      />

      <ProjectHolder isReverse={true} />
      <ProjectHolder />
      <ProjectHolder isReverse={true} />
    </div>
  );
};

export default Projects;
