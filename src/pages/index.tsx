import React from 'react';
import { Grid } from '@material-ui/core';
import Layout from '../components/layout';
import NewsItem from '../components/news-item';

interface news {
  id: number;
  title: string;
  date: Date;
  imagePath: string | null;
}

const newsList: news[] = [
  {
    id: 1,
    title: 'Überschrift',
    date: new Date(),
    imagePath: null
  },
  {
    id: 2,  
    title: 'Überschrift',
    date: new Date(),
    imagePath: null
  },
  {
    id: 3,
    title: 'Überschrift',
    date: new Date(),
    imagePath: null
  },
  {
    id: 4,
    title: 'Überschrift',
    date: new Date(),
    imagePath: null
  },
  {
    id: 5,
    title: 'Überschrift',
    date: new Date(),
    imagePath: null
  }
];

export default function NewsOverviewPage() {
  return (
    <Layout>
      <div className="utils-width-80">
        <Grid container>
          {newsList.map((news) => (
            <Grid item xs={12}>
              <NewsItem id={news.id} title={news.title} date={news.date} imagePath={news.imagePath}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
