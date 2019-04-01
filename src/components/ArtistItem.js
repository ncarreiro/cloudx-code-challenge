import React from 'react';
import Typography from '@material-ui/core/Typography';

const ArtistItem = artistData => (
  <li>
    <Typography variant="h6" gutterBottom>
      {artistData.artistName}
    </Typography>
  </li>
);

export default ArtistItem;