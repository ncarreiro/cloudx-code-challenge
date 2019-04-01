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
          justify="flex-start"
          alignItems="center"
          style={{padding: '10px'}}
        >
          <Link to="/">
            <img
              src={require('../media/cloudx_logo.png')}
              alt="CloudX Logo"
              style={{paddingRight: '15px'}}
            />
          </Link>
          <Typography
            variant="h4"
            gutterBottom
          >|</Typography>
          <Typography
            variant="h6"
            gutterBottom
          >&nbsp;Code Challenge by Nahuel Carreiro</Typography>
        </Grid>
      </BrowserRouter>
    )
  }
}

export default Header;