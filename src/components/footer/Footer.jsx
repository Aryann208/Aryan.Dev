import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Logo from '../assets/images/whiteLogo.svg';
import classes from './Footer.module.css';
import SocialButtons from '../assets/socialButtons/SocialButtons';
import RoundedButton from '../assets/roundedButton/RoundedButton';

const Footer = () => {
  return (
    <div className={classes.Footer} id="footer">
      <div className={classes.FooterTextContainer}>
        <div className={classes.ContactContainer}>
          <div className={classes.ContactContainerText}>
            <div className={`${classes.Heading2} ${classes.ContainerDiv}`}>
              Have a project ?
            </div>
            <div className={`${classes.Subheading2} ${classes.ContainerDiv}`}>
              Have an idea to develop into a website? {`Let's`} connect and
              discuss .
            </div>
            <div className={classes.ContainerDiv}>
              <RoundedButton text="Start a project" />
            </div>
          </div>
        </div>
        <div className={classes.FooterLogo}>
          <div className={classes.Logo}>
            <img src={Logo} alt="" />
          </div>
          <div className={classes.Subheading}>
            <p>Living, learning, & leveling up one day at a time.</p>
          </div>
        </div>
        <div className={classes.FooterSocialButtons}>
          <SocialButtons icon={<FaLinkedinIn />} />
          <SocialButtons icon={<FaGithub />} />
          <SocialButtons icon={<AiOutlineMail />} />
        </div>
        <div className={classes.FooterText}>
          Designed and developed by me &#169; 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
