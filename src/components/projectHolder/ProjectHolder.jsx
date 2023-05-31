import React from 'react';
import classes from './ProjectHolder.module.css';
import TechStack from '../techStack/TechStack';
import TMDB from '../assets/images/TMDB.jpg';
import LowResProjectHolder from '../lowResProjectHolder/LowResProjectHolder';
import NormalButton from '../normalButton/NormalButton';
import { BsBrowserChrome, BsGithub } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
const text =
  'Lorem, ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor sit amet consectetur adipisicing';
const ProjectHolder = ({
  title = 'Project Title',
  description = text,
  isReverse = false,
}) => {
  return (
    <>
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
            <NormalButton icon={<BsBrowserChrome />} />
            <NormalButton icon={<BsGithub />} />
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
      {/* min-height : 850px handler */}
      <LowResProjectHolder />
    </>
  );
};

export default ProjectHolder;
