import React from 'react';
import classes from './LowResProjectHolderV2.module.css';
import { BsBrowserChrome, BsGithub } from 'react-icons/bs';

const text =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum maiores magni doloribus placeat optio rerum dolorum libero beatae earum ipsam debitis mollitia, dolore enim suscipit, ratione iusto esse, non architecto. Aliquid nisi labore cupiditate, cumque illo .';

const LowResProjectHolderV2 = ({
  title = 'Project Title',
  description = text,
  isReverse = false,

  webLink,
  repoLink,
  images,
  tech = '',
}) => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.Image}>
        <img src={images[0]} alt="" />
      </div>
      <div className={classes.Content}>
        <h2 className={classes.Heading}>{title}</h2>
        <div className={classes.SkillContainer}>
          {tech.map((t) => (
            <span className={classes.Skill}>{t}</span>
          ))}
        </div>
        <div className={classes.Description}>
          <p>{description}</p>
        </div>
        <div className={classes.btnContainer}>
          <a target="_blank" rel="noopener noreferrer" href={repoLink}>
            <button className={classes.btn}>
              <span className={classes.btnContent}>
                {' '}
                <BsGithub className={classes.Icon} />
                <span className={classes.btnTitle}>Github</span>
              </span>
            </button>
          </a>

          <a target="_blank" rel="noopener noreferrer" href={webLink}>
            <button className={classes.btn}>
              <span className={classes.btnContent}>
                {' '}
                <BsBrowserChrome className={classes.Icon} />
                <span className={classes.btnTitle}> Live</span>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LowResProjectHolderV2;
