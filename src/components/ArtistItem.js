import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const ArtistItem = artistData => (
  <Paper>
    <Typography variant="h6" gutterBottom>
      {artistData.artistName}
    </Typography>
  </Paper>
);

export default ArtistItem;