import React from 'react';
import classes from './LowResProjectHolder.module.css';
import TechStack from '../techStack/TechStack';
import TMDB from '../assets/images/TMDB.jpg';

const text =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum maiores magni doloribus placeat optio rerum dolorum libero beatae earum ipsam debitis mollitia, dolore enim suscipit, ratione iusto esse, non architecto. Aliquid nisi labore cupiditate, cumque illo .';

const LowResProjectHolder = ({
  title = 'Project Title',
  description = text,
  isReverse = false,
}) => {
  return (
    <div className={classes.ProjectHolder}>
      <div className={classes.ProjectView}>
        <img className={classes.ProjectImage} src={TMDB} alt="" />
        <img className={classes.ProjectImage} src={TMDB} alt="" />
        <img className={classes.ProjectImage} src={TMDB} alt="" />
        <img className={classes.ProjectImage} src={TMDB} alt="" />
        <img className={classes.ProjectImage} src={TMDB} alt="" />
      </div>
      <div className={classes.Details}>
        <div>
          <p className={classes.Title}>{title}</p>
        </div>
        <div className={classes.TechStackContainer}>
          <TechStack />
        </div>
        <div className={classes.DescriptionContainer}>
          <p className={classes.RegularText}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LowResProjectHolder;
