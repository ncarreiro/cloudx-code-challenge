import React from 'react';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    padding: theme.spacing.unit * 2,
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

class Footer extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <AppBar
        position="fixed"
        color="default"
        className={classes.appBar}
      >
        <Typography
          variant="body1"
          style={{marginLeft: '10px', marginBottom: '6px'}}
        >
          Code Challenge by Nahuel Carreiro
        </Typography>
      </AppBar>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);