import React from "react"
import { Helmet } from "react-helmet"
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/layout.scss';

interface LayoutProps {
  children?: any
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Helmet>
        <title>{t("fullClubName")}</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <div className="page-container">
          <Header/>
            <main className="content-wrap">
              {children}
            </main>
          <Footer/>
        </div>
      </ThemeProvider>
    </>
  )
}