import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Grid
          container
          direction="row"
        >
          <Link to="/">
            <Grid>
              <img src={require('../media/cloudx_logo.png')} alt="CloudX Logo"/>
            </Grid>
            <Grid>
              <Typography>CHALLENGE (by Nahuel Carreiro)</Typography>
            </Grid>
          </Link>
        </Grid>
      </BrowserRouter>
    )
  }
}

export default Header;