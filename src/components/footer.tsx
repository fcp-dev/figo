import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { Avatar } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import { isMobile } from '../utils/helper';
import '../styles/footer.scss'

export default function Footer() {
  const { t } = useI18next();

  return (
    <footer className="footer">
      <div className="footer-social-links">
        <div className="footer-social-icons">
          <ul>
            <li>
              <a target="_blank" href="https://www.facebook.com/fcportugiesen/">
                <Avatar className="footer-social-button">
                  <Facebook/>
                </Avatar>  
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/fcp_freiburg_/">
                <Avatar className="footer-social-button">
                  <Instagram/>
                </Avatar>  
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-menu">
        {isMobile() === false && 
          <nav className="footer-menu-links">
            <ul>
              <li>
                <Link to="/legal-notice">{t("legalNotice")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("contact")}</Link>
              </li>
            </ul>
          </nav>
        }
        <div className={`footer-menu-copyright ${isMobile() ? 'utils-float-left' : 'utils-float-right'}`}>
          &copy;{new Date().getFullYear()} {t("fullClubName")} 
        </div>
      </div>
    </footer>
  );
};