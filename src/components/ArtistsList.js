import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    margin: theme.spacing.unit * 2,
    position: 'relative',
    height: 48,
  },
  img: {
    width: '100%',
    height: 300
  },
});

function ArtistsList(props) {
  const {classes, artists} = props;

  return (
    <div className={classes.root}>
      {artists.map(artist => (
        <Grid
          key={artist.artistId}
          container
        >
          <Grid item xs/>
          <Grid item xs={6}>
            <Link
              to={`/artist/${artist.artistId}`}
            >
              <Paper className={classes.paper}>
                <GridListTileBar
                  title={artist.artistName}
                  actionIcon={
                    <IconButton className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </Paper>
            </Link>
          </Grid>
          <Grid item xs/>
        </Grid>
      ))}
    </div>
  );
}

ArtistsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {
    artists,
    albums,
  } = state.homeReducer;

  const {
    showError
  } = state.dialogReducer;

  return {
    artists,
    albums,
    showError
  }
}

export default withStyles(styles)(connect(mapStateToProps, {})(ArtistsList));