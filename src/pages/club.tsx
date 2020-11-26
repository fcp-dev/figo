import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
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
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="utils-width-80">
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                1980
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot/>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className="paper">
                <Typography variant="h6" component="h1">
                  Gründung
                </Typography>
                <Typography>Text</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                1983
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot/>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className="paper">
                <Typography variant="h6" component="h1">
                  Nächstes Ereignis
                </Typography>
                <Typography>Text</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </Layout>
  );
}
