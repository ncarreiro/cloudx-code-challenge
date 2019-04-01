import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import {
  getAlbumById
} from '../actions/itunesActions';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
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

const TrackItem = props => (
  <Grid item xs>
    <Typography variant="body1">{props.trackName}</Typography>
  </Grid>
);

class Album extends React.Component {
  componentDidMount() {
    this.props.getAlbumById(this.props.match.params.albumId)
  }

  render() {
    const {
      classes,
      albumName,
      albumTracks,
      albumArtwork
    } = this.props;

    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <img
              className={classes.img}
              src={albumArtwork}
              alt={albumName}/>
          </Paper>
        </Grid>
        <Typography variant="h2" gutterBottom>
          {albumName}
        </Typography>
        {albumTracks.length ? albumTracks.map(track => <TrackItem key={track.trackId} {...track}/>) : null}
      </Grid>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {
    albumName,
    albumTracks,
    albumArtwork
  } = state.albumReducer;

  return {
    albumName,
    albumTracks,
    albumArtwork
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbumById: bindActionCreators(getAlbumById, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Album));