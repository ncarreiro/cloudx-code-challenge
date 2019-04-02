import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  icon: {
    marginRight: theme.spacing.unit,
  }
});

class GoBack extends React.Component {
  render() {
    const {
      classes,
      history
    } = this.props;
    return (
      <Grid
        container
        justify="flex-start"
      >
        <Fab
          variant="extended"
          onClick={() => history.goBack()}
        >
          <Icon className={classes.icon}>arrow_back</Icon>Go Back
        </Fab>
      </Grid>
    );
  }
}

GoBack.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(GoBack));