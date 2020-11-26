import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { ButtonBase, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import '../styles/team.scss';

const teams = [
  {
    id: 1,
    imagePath: '/teams/first/first.jpg',
    title: 'firstTeam'
  },
  {
    id: 2,
    imagePath: '/teams/second/second.jpg',
    title: 'secondTeam'
  },
  {
    id: 3,
    imagePath: '/teams/legends/legends.jpg',
    title: 'legends'
  },
];

export default function TeamOverviewPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="team-overview">
        {teams.map((team) => (
          <ButtonBase key={team.title} className="image">
            <Link to={`/teams/${team.id}`}>
              <span className="image-source" style={{backgroundImage: `url(${team.imagePath})`}}/>
              <span className="image-backdrop"/>
              <span className="image-button">
                <Typography component="span" variant="subtitle1" color="inherit" className="image-title">
                  {t(team.title)}
                </Typography>
              </span>
            </Link>
          </ButtonBase>
      ))}
      </div>
    </Layout>
  );
}
