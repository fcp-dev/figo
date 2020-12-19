import React from 'react';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Grid, Typography } from '@material-ui/core';
import Layout from '../../components/layout';
import TeamMember from '../../components/team-member-item';
import '../../styles/team.scss';

interface ITeamMember {
  firstName: string;
  lastName: string;
  position: string;
  image: string;
};

interface INode {
  frontmatter: ITeamMember
};

type TeamPageProps = {
  data: {
    allMarkdownRemark: {
      nodes: Array<INode>
    }
  }
};

export default function TeamPage({ data }: TeamPageProps) {
  const { t } = useI18next();

  const teamMembers= {
    goalkeepers: [] as Array<ITeamMember>,
    defenders: [] as Array<ITeamMember>,
    midfielders: [] as Array<ITeamMember>,
    forwards: [] as Array<ITeamMember>,
    managers: [] as Array<ITeamMember>
  };
  for (let teamMember of data.allMarkdownRemark.nodes) {
    switch (teamMember.frontmatter.position) {
      case 'goalkeeper':
        teamMembers.goalkeepers.push(teamMember.frontmatter);
        break;
      case 'defender':
        teamMembers.defenders.push(teamMember.frontmatter);
        break;
      case 'midfielder':
        teamMembers.midfielders.push(teamMember.frontmatter);
        break;
      case 'forward':
        teamMembers.forwards.push(teamMember.frontmatter);
        break;
      case 'manager':
        teamMembers.managers.push(teamMember.frontmatter);
        break;
      default:
        break;
    } 
  }

  let key = 0;
  const memberList = [];
  for (const [groupName, members] of Object.entries(teamMembers)) {
    memberList.push(
      <div key={key}>
        <Typography variant="h2" className="group-name-heading">{t(groupName).toUpperCase()}</Typography>
        <div className="utils-margin-bottom-20"></div>
        <Grid container spacing={2}>
          {members.map((member, index) => 
            <Grid item key={index}>
              <TeamMember firstName={member.firstName} lastName={member.lastName} imagePath={member.image}/>
            </Grid>
          )}
        </Grid>
      </div>
    );
    key++;
  }

 
  return (
    <Layout>
      {memberList}
    </Layout>
  );
}

export const pageQuery = graphql`
  query getTeamMembersById($teamId: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { teamId: { eq: $teamId } } },
      sort: { fields: [frontmatter___firstName], order: ASC }
    ) {
      nodes {
        frontmatter {
          firstName,
          lastName,
          position,
          image
        }
      }
    }
  }
`
