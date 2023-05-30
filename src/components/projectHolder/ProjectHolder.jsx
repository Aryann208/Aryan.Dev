import React from 'react';
import classes from './ProjectHolder.module.css';
import TechStack from '../techStack/TechStack';
import TMDB from '../assets/images/TMDB.jpg';
const text =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum maiores magni doloribus placeat optio rerum dolorum libero beatae earum ipsam debitis mollitia, dolore enim suscipit, ratione iusto esse, non architecto. Aliquid nisi labore cupiditate, cumque illo quod architecto odit possimus dolorum optio saepe harum. Nesciunt, esse quae. Aperiam aliquid, ipsa quod voluptatem deleniti quos natus quaerat! Sed non magni fugit! In, id quo quis veniam tempore perspiciatis, porro facilis accusantium temporibus minus corporis fugit, libero consequuntur tempora? Nam vero eius recusandae, veniam est, earum aut delectus alias illum, quos soluta! Unde dignissimos rem libero vero, quisquam tempore nobis expedita minima Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum maiores magni doloribus placeat optio rerum dolorum libero beatae earum ipsam debitis mollitia, dolore enim suscipit, ratione iusto esse, non architecto. Aliquid nisi labore cupiditate, cumque illo quod architecto odit possimus dolorum optio saepe harum. Nesciunt, esse quae. Aperiam aliquid, ipsa quod voluptatem deleniti quos natus quaerat! Sed non magni fugit! In, id quo quis veniam tempore perspiciatis, porro facilis accusantium temporibus minus corporis fugit, libero consequuntur tempora? Nam vero eius recusandae, veniam est, earum aut delectus alias illum, quos soluta! Unde dignissimos rem libero vero, quisquam tempore nobis expedita minima laboriosam, at molestias. Quis placeat ipsa error quasi vitae quidem corrupti assumenda cumque asperiores maxime veritatis soluta, iste ratione? Animi.';
const ProjectHolder = ({
  title = 'Project Title',
  description = text,
  isReverse = false,
}) => {
  return (
    <div
      className={
        isReverse ? `${classes.ProjectHolderRev}` : `${classes.ProjectHolder}`
      }
    >
      {isReverse && (
        <div
          className={
            isReverse
              ? `${classes.ProjectViewContainerRev}`
              : `${classes.ProjectViewContainer}`
          }
        >
          <div className={classes.ProjectView}>
            <img className={classes.ProjectImage} src={TMDB} alt="" />
            <img className={classes.ProjectImage} src={TMDB} alt="" />
            <img className={classes.ProjectImage} src={TMDB} alt="" />
            <img className={classes.ProjectImage} src={TMDB} alt="" />
            <img className={classes.ProjectImage} src={TMDB} alt="" />
          </div>
        </div>
      )}
      <div
        className={isReverse ? `${classes.DetailsRev}` : `${classes.Details}`}
      >
        <div>
          {/*       <span className={classes.Heading}>Title </span>*/}
          <p className={classes.Title}>{title}</p>
        </div>
        <div className={classes.TechStackContainer}>
          <TechStack />
        </div>
        <div className={classes.DescriptionContainer}>
          {/* <span className={classes.Heading}>Description </span>*/}
          <p className={classes.RegularText}>{description}</p>
        </div>
      </div>
      {!isReverse && (
        <div
          className={
            isReverse
              ? `${classes.ProjectViewContainerRev}`
              : `${classes.ProjectViewContainer}`
          }
        >
          <div className={classes.ProjectView}>
            <img className={classes.ProjectImage} src={TMDB} alt="" />
            <img className={classes.ProjectImage} src={TMDB} alt="" />
            <img className={classes.ProjectImage} src={TMDB} alt="" />
            <img className={classes.ProjectImage} src={TMDB} alt="" />
            <img className={classes.ProjectImage} src={TMDB} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectHolder;
