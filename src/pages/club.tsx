import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Paper, Typography } from '@material-ui/core';
import {
  Timeline,
  TimelineItem, 
  TimelineSeparator,
  TimelineConnector, 
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot
} from '@material-ui/lab';
import Layout from '../components/layout';
import '../styles/club.scss';

export default function ClubPage() {
  const { t } = useI18next();

  const timeLineItems = [
    {year: 1980, title: "Gründung", text: "t.b.d"},
    {year: 1983, title: "Zweites Ereignis", text: "t.b.d"},
  ];

  return (
    <Layout>
      <Timeline align="alternate">
        {timeLineItems.map((timeLineItem, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {timeLineItem.year}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot/>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className="paper">
                <Typography variant="h6" component="h1">
                  {t(timeLineItem.title)}
                </Typography>
                <Typography>{t(timeLineItem.text)}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Layout>
  );
}
