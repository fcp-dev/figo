import React from 'react';
import { graphql } from 'gatsby';
import { Grid } from '@material-ui/core';
import Layout from '../components/layout';
import NewsItem from '../components/news-item';

interface INode {
  fields: {
    slug: string
  },
  frontmatter: {
    date: Date,
    slug: string,
    title: string
  }
};

type NewsOverviewPageProps = {
  data: {
    allMarkdownRemark: {
      nodes: Array<INode>
    }
  }
};

export default function NewsOverviewPage({ data }: NewsOverviewPageProps) {
  const newsList: Array<INode> = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className="utils-width-80">
        <Grid container>
          {newsList.map(news => (
            <Grid item xs={12}>
              <NewsItem title={news.frontmatter.title} date={news.frontmatter.date} link={news.fields.slug}/>
            </Grid>
          ))}
        </Grid>
      </div>
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
          date
          title
        }
      }
    }
  }
`