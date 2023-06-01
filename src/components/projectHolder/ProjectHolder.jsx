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
  webLink,
  repoLink,
  images,
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
              {images?.map((img) => (
                <img className={classes.ProjectImage} src={img} alt="" />
              ))}
            </div>
          </div>
        )}
        <div
          className={isReverse ? `${classes.DetailsRev}` : `${classes.Details}`}
        >
          <div>
            {/*       <span className={classes.Heading}>Title </span>*/}
            <p
              className={isReverse ? `${classes.TitleRev}` : `${classes.Title}`}
            >
              {title}
            </p>
          </div>
          <div className={classes.TechStackContainer}>
            <a href={webLink} target="_blank">
              <NormalButton icon={<BsBrowserChrome />} />
            </a>
            <a href={repoLink} target="_blank">
              <NormalButton icon={<BsGithub />} />
            </a>
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
              {images?.map((img) => (
                <img
                  className={classes.ProjectImage}
                  src={img}
                  alt="Project Images"
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {/* min-height : 850px handler */}
      <LowResProjectHolder
        isReverse={isReverse}
        title={title}
        description={description}
        webLink={webLink}
        repoLink={repoLink}
        images={images}
      />
    </>
  );
};

export default ProjectHolder;
