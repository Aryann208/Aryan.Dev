import React from 'react';
import classes from './Header.module.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import SocialButtons from '../assets/socialButtons/SocialButtons';
import InfiniteScroll from '../assets/infiniteScroll/InfiniteScollAnimation';

const Header = () => {
  return (
    <div className="headerpseudo">
      <div className={classes.Header} id="header">
        <div className={classes.LeftSection}>
          <div className={classes.RegularText}>
            <span className={`${classes.Heading} ${classes.EnhancedText}`}>
              Aryan Trivedi
            </span>

            <p className={`${classes.Heading2} ${classes.EnhancedText}`}>
              <span className={classes.QuotationText}>{`</`}</span>frontend
              developer<span className={classes.QuotationText}>{`>`}</span>
            </p>
          </div>
          <div className={classes.TechStack}>
            <div className={classes.SocialButtons}>
              <SocialButtons
                bgColor="#F8DCC1"
                textColor="purple"
                icon={<FaLinkedinIn />}
                link={'https://www.linkedin.com/in/aryan-trivedi-14279a190'}
              />
              <SocialButtons
                bgColor="#F8DCC1"
                textColor="purple"
                icon={<FaGithub />}
                link={'https://github.com/Aryann208'}
              />
              <SocialButtons
                bgColor="#F8DCC1"
                textColor="purple"
                icon={<AiOutlineMail />}
                link={'mailto:www.aryantrivedi208@gmail.com'}
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
