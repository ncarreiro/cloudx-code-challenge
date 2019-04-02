import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import {
  AlbumTracksList,
  Loader
} from '../components';

import {
  getAlbumById
} from '../actions/itunesActions';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10
  },
  paper: {
    position: 'relative',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    height: 300,
    width: 300,
  },
  img: {
    width: '100%',
    height: 300
  }
});

class AlbumView extends React.Component {
  componentDidMount() {
    this.props.getAlbumById(this.props.match.params.albumId)
  }

  render() {
    const {
      classes,
      artistName,
      albumName,
      albumTracks,
      albumArtwork,
      showLoader
    } = this.props;

    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}>
        {showLoader ? <Grid
          container
          justify="center"
          alignItems="stretch"
        >
          <Loader/>
        </Grid> : null}
        {albumArtwork && <Grid item xs>
          <Paper className={classes.paper}>
            <img
              className={classes.img}
              src={albumArtwork}
              alt={albumName}/>
          </Paper>
        </Grid>}
        {albumName && <Typography variant="h4" gutterBottom>
          {albumName}
        </Typography>}
        {artistName && <Typography variant="body1" gutterBottom>
          by {artistName}
        </Typography>}
        {albumTracks.length ? <AlbumTracksList
          albumTracks={albumTracks}
        /> : null}
      </Grid>
    );
  }
}

AlbumView.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {showLoader} = state.loaderReducer;
  const {
    artistName,
    albumName,
    albumTracks,
    albumArtwork
  } = state.albumReducer;

  return {
    artistName,
    albumName,
    albumTracks,
    albumArtwork,
    showLoader
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbumById: bindActionCreators(getAlbumById, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AlbumView));