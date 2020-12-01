import React from 'react';
import { Breakpoint } from 'react-socks';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import LanguageSelector from './language-selector';
import '../styles/header.scss';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src="/img/logos/37x60.png"/>
        </Link>
      </div>
      <nav className="header-nav-menu">
        <Breakpoint medium up>
          <nav>
            <ul>
              <li>
                <Link to="/" className="nav-item utils-color-white" activeClassName="selected-nav-item">{t("news")}</Link>
              </li>
              <li>
                <Link to="/teams" className="nav-item utils-color-white" activeClassName="selected-nav-item">{t("teams")}</Link>
              </li>
              <li>
                <Link to="/club" className="nav-item utils-color-white" activeClassName="selected-nav-item">{t("club")}</Link>
              </li>
              <li>
                <Link to="/stadium" className="nav-item utils-color-white" activeClassName="selected-nav-item">{t("stadium")}</Link>
              </li>
            </ul>
          </nav>
        </Breakpoint>
      </nav>
      <div className="header-language-selector">
        <LanguageSelector/>
      </div>
    </header>
  );
};