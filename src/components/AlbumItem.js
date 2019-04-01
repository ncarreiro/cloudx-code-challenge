import React from 'react';
import Typography from '@material-ui/core/Typography';

const AlbumItem = artistData => (
  <li>
    <a href={artistData.collectionViewUrl}>
      <div><img src={artistData.artworkUrl100}/></div>
      <div>{artistData.collectionName}</div>
    </a>
  </li>
);

export default AlbumItem;