import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { ButtonBase, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import '../styles/team.scss';

interface ITeam {
  id: number,
  imagePath: string,
  title: string
}

const teams: Array<ITeam> = [
  {
    id: 1,
    imagePath: '/img/firstTeam.jpg',
    title: 'firstTeam'
  },
  {
    id: 2,
    imagePath: '/img/secondTeam.jpg',
    title: 'secondTeam'
  }
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
