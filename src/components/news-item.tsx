import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import moment from 'moment';
import '../styles/news.scss';

type NewsItemProps = {
  id: number,
  title: string,
  date: Date,
  imagePath: string | null,
}

export default function NewsItem({id, title, date, imagePath}: NewsItemProps) {
  return(
    <div className="card">
      <Link to={`/news/${id}`}>
        <Card variant="outlined">
          <CardActionArea>
            {imagePath ? <CardMedia className="card-media" image={imagePath}/> : ''}
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
