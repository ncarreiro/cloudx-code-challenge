import React from 'react';
import Typography from '@material-ui/core/Typography';

const AlbumItem = artistData => (
  <a href={artistData.collectionViewUrl}>
    <div><img src={artistData.artworkUrl100}/></div>
    <Typography variant="h6">{artistData.collectionName}</Typography>
  </a>
);

export default AlbumItem;