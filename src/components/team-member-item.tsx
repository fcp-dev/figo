import { Box } from '@material-ui/core';
import React from 'react';

type TeamMemberItemProps = {
  firstName: string,
  lastName: string,
  imagePath: string
}

export default function TeamMemberItem({firstName, lastName, imagePath}: TeamMemberItemProps) {
  return(
    <div>
      <div className="team-member-item">
        <img src={imagePath}/>
        <div className="team-member-name">
          <Box fontWeight="fontWeightBold">{firstName} {lastName}</Box>
        </div>       
      </div>
    </div> 
  );
}