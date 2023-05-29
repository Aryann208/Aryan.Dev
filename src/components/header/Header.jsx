import React from 'react';
import classes from './Header.module.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import SocialButtons from '../assets/socialButtons/SocialButtons';
import InfiniteScroll from '../assets/infiniteScroll/InfiniteScollAnimation';

const Header = () => {
  return (
    <div className="headerpseudo">
      <div className={classes.Header}>
        <div className={classes.LeftSection}>
          <p className={`${classes.RegularText} ${classes.BottomAlignText}`}>
            hi, i am{' '}
          </p>
          <p className={classes.RegularText}>
            <span className={`${classes.Heading} ${classes.EnhancedText}`}>
              Aryan Trivedi
            </span>
            <br />a{' '}
            <span className={`${classes.Heading2} ${classes.EnhancedText}`}>
              <span className={classes.QuotationText}>{` </`}</span>frontend
              developer<span className={classes.QuotationText}>{`>`}</span>
            </span>
          </p>
          <div className={classes.TechStack}>
            <div className={classes.SocialButtons}>
              <SocialButtons
                bgColor="#F8DCC1"
                textColor="purple"
                icon={<FaLinkedinIn />}
              />
              <SocialButtons
                bgColor="#F8DCC1"
                textColor="purple"
                icon={<FaGithub />}
              />
              <SocialButtons
                bgColor="#F8DCC1"
                textColor="purple"
                icon={<AiOutlineMail />}
              />
            </div>
          </div>
        </div>
        <div className={classes.RightSection}>
          <InfiniteScroll />
        </div>
      </div>
    </div>
  );
};

export default Header;

// <div></div>
//           <div></div>
//           <div></div>
//           <div className={classes.NavigationList}>
//             <span className={classes.NavigationListSpan}>About</span>
//             <span className={classes.NavigationListSpan}>Projects</span>
//             <span className={classes.NavigationListSpan}>Contact</span>
//           </div>
