import React from 'react';
import { graphql } from 'gatsby';
import { Grid } from '@material-ui/core';
import Layout from '../components/layout';
import '../styles/sponsors.scss';

interface ISponsor {
  name: string,
  link: string;
  image: string;
};

interface INode {
  frontmatter: ISponsor
};

type SponsorsPageProps = {
  data: {
    allMarkdownRemark: {
      nodes: Array<INode>
    }
  }
};

export default function SponsorsPage({ data }: SponsorsPageProps) {
  const sponsors: Array<INode> = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
      {sponsors.map((sponsor, index) => (
        <Grid item key={index}>
          <div className="sponsor-image-container">
            <a target="_blank" href={sponsor.frontmatter.link}>
              <img title={sponsor.frontmatter.name} src={sponsor.frontmatter.image}/>
            </a>
          </div>
        </Grid>
      ))}
      </Grid>
    </Layout>
  );
}

export const pageQuery = graphql`
  query getSponsors {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/sponsors/" } },
      sort: { fields: [frontmatter___name], order: ASC },
    ) {
      nodes {
        frontmatter {
          name,
          link,
          image
        }
      }
    }
  }
`