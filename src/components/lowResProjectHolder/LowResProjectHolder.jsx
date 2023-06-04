import React from 'react';
import classes from './LowResProjectHolder.module.css';
import TechStack from '../techStack/TechStack';
import TMDB from '../assets/images/TMDB.jpg';
import NormalButton from '../normalButton/NormalButton';
import { BsBrowserChrome, BsGithub } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const text =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum maiores magni doloribus placeat optio rerum dolorum libero beatae earum ipsam debitis mollitia, dolore enim suscipit, ratione iusto esse, non architecto. Aliquid nisi labore cupiditate, cumque illo .';

const LowResProjectHolder = ({
  title = 'Project Title',
  description = text,
  isReverse = false,

  webLink,
  repoLink,
  images,
}) => {
  return (
    <div
      className={
        isReverse ? `${classes.ProjectHolder}` : `${classes.ProjectHolder}`
      }
    >
      <div className={classes.ProjectView}>
        {images?.map((img) => (
          <img className={classes.ProjectImage} src={img} alt="" />
        ))}
      </div>
      <div className={classes.Details}>
        <div>
          <p className={classes.Title}>{title}</p>
        </div>

        <div className={classes.DescriptionContainer}>
          <p className={classes.RegularText}>{description}</p>
          <div className={classes.TechStackContainer}>
            <a href={webLink} target="_blank">
              <NormalButton icon={<BsBrowserChrome />} />
            </a>
            <a href={repoLink} target="_blank">
              <NormalButton icon={<BsGithub />} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowResProjectHolder;
