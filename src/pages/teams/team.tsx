import React from 'react';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Paper, Tab, Tabs } from '@material-ui/core';
import FupaWidget from '../../components/fupa-widget';
import Layout from '../../components/layout';
import TabPanel from '../../components/tab-panel';
import TeamMemberList from '../../components/team-member-list';
import { isMobile } from '../../utils/helper';
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
  },
  pageContext: {
    teamId: number;
  }
};

export default function TeamPage({ data, pageContext }: TeamPageProps) {
  const { t } = useI18next();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  let externalId: number | null;
  switch(pageContext.teamId) {
    case 1:
      externalId = 860132;
      break;
    case 2:
      externalId = 860320;
      break;
    default:
      externalId = null;
      break;
  }

  return (
    <Layout>
      <Paper className={isMobile() ? 'tabs-mobile' : 'tabs'}>
        <Tabs value={value} onChange={handleChange}>
          <Tab className="tab" label={t("players")}/>
          <Tab className="tab" label={t("matches")}/>
          <Tab className="tab" label={t("table")}/>
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
         <TeamMemberList teamMemberData={data.allMarkdownRemark.nodes}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="utils-margin-bottom-20"></div>
        {externalId === null ? (<div>{t("noMatchesFound")}</div>) : (<FupaWidget id={externalId} type="spielplan"/>)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="utils-margin-bottom-20"></div>
        {externalId === null ? (<div>{t("noTableFound")}</div>) : (<FupaWidget id={externalId} type="tabelle"/>)}
      </TabPanel>
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
