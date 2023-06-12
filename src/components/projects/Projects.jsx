import React from 'react';
import classes from './Projects.module.css';
import TechStack from '../techStack/TechStack';
import tmdb1 from '../assets/images/tmdb1.jpg';
import tmdb2 from '../assets/images/tmdb2.jpg';
import tmdb3 from '../assets/images/tmdb3.jpg';
import tmdb4 from '../assets/images/tmdb4.jpg';
import deli1 from '../assets/images/recipe1.jpg';
import deli2 from '../assets/images/recipe2.jpg';
import metaverse1 from '../assets/images/metaverse1.jpg';
import metaverse2 from '../assets/images/metaverse2.jpg';
import crwn1 from '../assets/images/crwn1.jpg';
import crwn2 from '../assets/images/crwn2.jpg';
import crwn3 from '../assets/images/crwn3.jpg';
import airbnb1 from '../assets/images/airbnb1.jpg';
import ProjectHolder from '../projectHolder/ProjectHolder';
import ProjectHolderV2 from '../projectHolderV2/ProjectHolderV2';
const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cum accusamus. Voluptas repudiandae, quae error beatae aperiam dolor id consectetur dolor sit amet consectetur adipisicing elit. Tempora, cum accusamus. Voluptas repudiandae, quae error beatae aperiam dolor id consectetur.';

const ProjectJSON = [
  {
    title: 'TMDB : Movie & TV Shows Database',
    description:
      'TMDB is a React JS web app that uses a Restful public API to provide movie and TV show information. With Redux for state management and Vercel for deployment, TMDB offers an immersive platform to explore release dates, cast details, descriptions, ratings, and trailers.',
    webLink: 'https://tmdb-phi.vercel.app/',
    repoLink: 'https://github.com/Aryann208/TMDB',
    images: [tmdb1, tmdb2, tmdb3, tmdb4],
  },
  {
    title: 'Delicious : Cuisine and Recipes Database',
    description:
      'Delicious is a React JS project that offers a diverse collection of global cuisines. With detailed information about categories, origins, ingredients, and instructions, users can explore and create a variety of dishes. Styled Components add visual appeal to the website. Discover culinary delights with Delicious and satisfy your taste for international flavors.',
    webLink: 'https://react-recipes-mauve.vercel.app/',
    repoLink: 'https://github.com/Aryann208/React-Recipes',
    images: [deli1, deli2],
  },
  {
    title: 'Metaverse ',
    description:
      'MetaVerse is a captivating React JS web app that combines stunning animations with high-fidelity design. Powered by Framer Motion, the app offers a seamless and visually appealing user experience. Deployed on Vercel .',
    webLink: 'https://metaverse-p92w.vercel.app/',
    repoLink: 'https://github.com/Aryann208/Metaverse',
    images: [metaverse1, metaverse2],
  },
  {
    title: 'CRWN-CLothing',
    description:
      'CRWN CLOTHING: Explore, Shop, Express. Discover a stylish React JS web app with seamless cart management and efficient state synchronization. Deployed with Vercel for optimal performance and scalability. Unleash your unique style with CRWN CLOTHING.',
    webLink: 'https://crwn-clothing-jet.vercel.app/',
    repoLink: 'https://github.com/Aryann208/Crwn-clothing',
    images: [crwn1, crwn2, crwn3],
  },
  // {
  //   title: 'Airbnb Clone ',
  //   description: 'High-fidelity design of Airbnb homepage to Next Js app .  ',
  //   webLink: 'https://airbnb-nextjs-zic2.vercel.app/',
  //   repoLink: 'https://github.com/Aryann208/Airbnb_nextjs',
  //   images: [airbnb1],
  // },
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
