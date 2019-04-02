import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  appBar: {
    padding: theme.spacing.unit * 2,
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
          </Grid>
        </AppBar>
      </BrowserRouter>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);