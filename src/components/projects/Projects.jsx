import React from 'react';
import classes from './Projects.module.css';
import TechStack from '../techStack/TechStack';
import tmdb1 from '../assets/images/tmdb1.jpg';
import tmdb2 from '../assets/images/tmdb2.jpg';
import tmdb3 from '../assets/images/tmdb3.jpg';
import tmdb4 from '../assets/images/tmdb4.jpg';
import metaverse1 from '../assets/images/metaverse1.jpg';
import metaverse2 from '../assets/images/metaverse2.jpg';
import crwn1 from '../assets/images/crwn1.jpg';
import crwn2 from '../assets/images/crwn2.jpg';
import crwn3 from '../assets/images/crwn3.jpg';
import airbnb1 from '../assets/images/airbnb1.jpg';
import ProjectHolder from '../projectHolder/ProjectHolder';
const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cum accusamus. Voluptas repudiandae, quae error beatae aperiam dolor id consectetur dolor sit amet consectetur adipisicing elit. Tempora, cum accusamus. Voluptas repudiandae, quae error beatae aperiam dolor id consectetur.';

const ProjectJSON = [
  {
    title: 'TMDB : Movie & TV Shows',
    description:
      'A React JS application which receives is data from TMDB API about movies and TV shows with details such as ratings, cast, trailer etc . Redux Toolkit is used for state management . ',
    webLink: 'https://tmdb-phi.vercel.app/',
    repoLink: 'https://github.com/Aryann208/TMDB',
    images: [tmdb1, tmdb2, tmdb3, tmdb4],
  },
  {
    title: 'Metaverse ',
    description:
      'A frontend react web application with text and motion effects from Framer library . ',
    webLink: 'https://metaverse-p92w.vercel.app/',
    repoLink: 'https://github.com/Aryann208/Metaverse',
    images: [metaverse1, metaverse2],
  },
  {
    title: 'CRWN-CLothing',
    description:
      'An E-commerce react application to allow user to browse through sections and select products .  ',
    webLink: 'https://crwn-clothing-jet.vercel.app/',
    repoLink: 'https://github.com/Aryann208/Crwn-clothing',
    images: [crwn1, crwn2, crwn3],
  },
  {
    title: 'Airbnb Clone ',
    description: 'High-fidelity design of Airbnb homepage to Next Js app .  ',
    webLink: 'https://airbnb-nextjs-zic2.vercel.app/',
    repoLink: 'https://github.com/Aryann208/Airbnb_nextjs',
    images: [airbnb1],
  },
];
const Projects = () => {
  return (
    <div className={classes.Project} id="project">
      {ProjectJSON.map((project, idx) => (
        <ProjectHolder
          isReverse={idx % 2 === 0}
          title={project.title}
          description={project.description}
          webLink={project.webLink}
          repoLink={project.repoLink}
          images={project.images}
        />
      ))}
    </div>
  );
};

export default Projects;
