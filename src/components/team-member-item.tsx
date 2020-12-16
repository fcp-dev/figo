import React, { SyntheticEvent } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

type TeamMemberItemProps = {
  firstName: string,
  lastName: string,
  imagePath: string
}

export default function TeamMemberItem({firstName, lastName, imagePath}: TeamMemberItemProps) {
  let errorFlag = true;
  const getDefaultImagePath = (event: SyntheticEvent) => {
    if (errorFlag && event.target instanceof HTMLImageElement) {
      event.target.src = '/img/default.png';
      event.target.onerror = null;
      errorFlag = false;
    }
  };

  return(
    <Card className="team-member-item" variant="outlined">
      <CardMedia className="team-member-image-container">
        <img className="team-member-image" src={imagePath} onError={getDefaultImagePath}/>
      </CardMedia>
      <CardContent className="team-member-name">
        <Typography variant="body2" component="p">
          {firstName} {lastName}
        </Typography>
      </CardContent>
    </Card>
  );
}