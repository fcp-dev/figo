import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Grid, Typography } from '@material-ui/core';
import Layout from '../../components/layout';
import TeamMember from '../../components/team-member-item';
import '../../styles/team.scss';

const teamMembers = {
  goalkeepers: [
    {
      firstName: 'Vorname1',
      lastName: 'Nachname1',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname2',
      lastName: 'Nachname2',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname3',
      lastName: 'Nachname3',
      imagePath: '/teams/first/player.jpeg'
    },
  ],
  defenders: [
    {
      firstName: 'Vorname1',
      lastName: 'Nachname1',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname2',
      lastName: 'Nachname2',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname3',
      lastName: 'Nachname3',
      imagePath: '/teams/first/player.jpeg'
    },
  ],
  midfielders: [
    {
      firstName: 'Vorname1',
      lastName: 'Nachname1',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname2',
      lastName: 'Nachname2',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname3',
      lastName: 'Nachname3',
      imagePath: '/teams/first/player.jpeg'
    },
  ],
  forwards: [
    {
      firstName: 'Vorname1',
      lastName: 'Nachname1',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname2',
      lastName: 'Nachname2',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname3',
      lastName: 'Nachname3',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname1',
      lastName: 'Nachname1',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname2',
      lastName: 'Nachname2',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname3',
      lastName: 'Nachname3',
      imagePath: '/teams/first/player.jpeg'
    },
  ],
  managers: [
    {
      firstName: 'Vorname1',
      lastName: 'Nachname1',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname2',
      lastName: 'Nachname2',
      imagePath: '/teams/first/player.jpeg'
    },
    {
      firstName: 'Vorname3',
      lastName: 'Nachname3',
      imagePath: '/teams/first/player.jpeg'
    },
  ]
};

export default function TeamPage() {
  const { t } = useTranslation();

  const memberList = [];
  for (const [groupName, members] of Object.entries(teamMembers)) {
    memberList.push(
      <div>
        <Typography variant="h2" className="group-name-heading">{t(groupName).toUpperCase()}</Typography>
        <div className="utils-margin-bottom-20"></div>
        <Grid container spacing={2}>
          {members.map((member) => 
            <Grid item>
              <TeamMember firstName={member.firstName} lastName={member.lastName} imagePath={member.imagePath}/>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }

  return (
    <Layout>
      <div className="utils-width-80">
        {memberList}
      </div>
    </Layout>
  );
}
