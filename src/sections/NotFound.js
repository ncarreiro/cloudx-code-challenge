import React from 'react';
import {Link} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10
  },
});

class NotFound extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        className={classes.root}
      >
        <Typography variant="h2" gutterBottom>404 Not Found</Typography>
        <Link
          to="/"
          style={{textDecoration: 'none'}}>
          <Typography
            variant="h6"
            color="primary"
          >Go to Home</Typography>
        </Link>
      </Grid>
    );
  }
}

export default withStyles(styles)(NotFound);
