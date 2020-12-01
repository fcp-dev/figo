import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

type TeamMemberItemProps = {
  firstName: string,
  lastName: string,
  imagePath: string
}

export default function TeamMemberItem({firstName, lastName, imagePath}: TeamMemberItemProps) {
  return(
    <Card className="team-member-item" variant="outlined">
      <CardMedia className="team-member-image" image={imagePath}/>
      <CardContent className="team-member-name">
        <Typography variant="body2" component="p">
          {firstName} {lastName}
        </Typography>
      </CardContent>
    </Card>
  );
}