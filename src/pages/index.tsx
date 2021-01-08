import React from 'react';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Grid, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import NewsItem from '../components/news-item';
import '../styles/start.scss';

interface INode {
  fields: {
    slug: string
  },
  frontmatter: {
    date: string,
    slug: string,
    title: string
  }
};

type StartPageProps = {
  data: {
    allMarkdownRemark: {
      nodes: Array<INode>
    }
  }
};

export default function StartPage({ data }: StartPageProps) {
  const newsList: Array<INode> = data.allMarkdownRemark.nodes;

  const { t } = useI18next();

  return (
    <Layout>
      <div className="welcome-container">
        <div className="welcome-content">
          <Typography variant="h4">
            <div dangerouslySetInnerHTML={{__html: t("welcomeText", {interpolation: {escapeValue: false}})}} />
          </Typography>
        </div>
      </div>
      <div className="separator">
        <Typography variant="h6">{t("news")}</Typography>
      </div>
      <Grid container>
        {newsList.map((news, index) => (
          <Grid item xs={12} key={index}>
            <NewsItem title={news.frontmatter.title} date={news.frontmatter.date} link={news.fields.slug}/>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export const pageQuery = graphql`
  query getNewsByLocale($locale: String!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/news/" }, fields: { locale: { eq: $locale } } },
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 10
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD.MM.YYYY")
          title
        }
      }
    }
  }
`