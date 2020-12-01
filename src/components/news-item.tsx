import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import moment from 'moment';
import '../styles/news.scss';

type NewsItemProps = {
  title: string,
  date: Date,
  link: string
}

export default function NewsItem({ title, date, link }: NewsItemProps) {
  return(
    <div className="card">
      <Link to={link}>
        <Card variant="outlined">
          <CardActionArea>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {moment(date).format('DD.MM.YYYY')}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}
