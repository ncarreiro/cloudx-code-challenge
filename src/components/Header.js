import React from 'react';
import Typography from '@material-ui/core/Typography';

const Header = artistData => (
  <div>
    <a href={artistData.collectionViewUrl}>
      <img src={require('../media/cloudx_logo.png')} alt="CloudX Logo"/><Typography>CHALLENGE (by Nahuel Carreiro)</Typography>
    </a>
  </div>
);

export default Header;