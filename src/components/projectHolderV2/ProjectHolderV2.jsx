import React from 'react';
import classes from './ProjectHolderV2.module.css';
import LowResProjectHolderV2 from '../lowResProjectHolderV2/LowResProjectHolderV2';
import NormalButton from '../normalButton/NormalButton';
import { BsBrowserChrome, BsGithub } from 'react-icons/bs';
const text =
  'Lorem, ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor sit amet consectetur adipisicing';
const ProjectHolderV2 = ({
  title = 'Project Title',
  description = text,
  isReverse = false,
  webLink,
  repoLink,
  images,
  tech = '',
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
          {!isReverse && (
            <div className={classes.SkillContainer}>
              {tech.map((t) => (
                <p className={classes.Skill}>{t}</p>
              ))}
            </div>
          )}
          {isReverse && (
            <div className={classes.SkillContainer}>
              {tech.map((t) => (
                <p className={classes.SkillRev}>{t}</p>
              ))}
            </div>
          )}
          <div className={classes.DescriptionContainer}>
            {/* <span className={classes.Heading}>Description </span>*/}
            <p className={classes.RegularText}>{description}</p>
          </div>

          {!isReverse && (
            <div className={classes.TechStackContainer}>
              <a href={webLink} target="_blank" rel="noopener noreferrer">
                <NormalButton icon={<BsBrowserChrome />} width="80%" />
              </a>
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <NormalButton icon={<BsGithub />} width="80%" />
              </a>
            </div>
          )}

          {isReverse && (
            <div className={classes.TechStackContainer}>
              <a href={webLink} target="_blank" rel="noopener noreferrer">
                <NormalButton
                  icon={<BsBrowserChrome />}
                  width="80%"
                  textColor="#422057"
                  bgColor="white"
                />
              </a>
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <NormalButton
                  icon={<BsGithub />}
                  width="80%"
                  textColor="#422057"
                  bgColor="white"
                />
              </a>
            </div>
          )}
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

      <LowResProjectHolderV2
        isReverse={isReverse}
        title={title}
        description={description}
        webLink={webLink}
        repoLink={repoLink}
        images={images}
        tech={tech}
      />
    </>
  );
};

export default ProjectHolderV2;
