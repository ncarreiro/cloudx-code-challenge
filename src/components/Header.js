import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    padding: theme.spacing.unit,
  },
  logo: {
    paddingRight: theme.spacing.unit * 2,
  }
});

class Header extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <BrowserRouter>
        <AppBar
          position="sticky"
          color="default"
          className={classes.appBar}
        >
          <Toolbar>
            <Grid
              container
              justify="flex-start"
              alignItems="center"
            >
              <Link to="/">
                <img
                  src={require('../media/cloudx_logo.png')}
                  alt="CloudX Logo"
                  className={classes.logo}
                />
              </Link>
              <Typography
                variant="h4"
                style={{marginBottom: '10px'}}
              >|</Typography>
              <Typography
                variant="h6"
                style={{marginLeft: '10px', marginBottom: '6px'}}
              >Code Challenge by Nahuel Carreiro</Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </BrowserRouter>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);