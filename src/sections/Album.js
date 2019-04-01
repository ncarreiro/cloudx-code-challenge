import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import {
  getAlbumById
} from '../actions/itunesActions';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const TrackItem = props => <li>{props.trackName}</li>;

class Album extends React.Component {
  componentDidMount() {
    this.props.getAlbumById(this.props.match.params.albumId)
  }

  render() {
    const {
      classes,
      albumName,
      albumTracks
    } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
          {albumName}
        </Typography>
        <ul>
          {albumTracks.length ? albumTracks.map(track => <TrackItem key={track.trackId} {...track}/>) : null}
        </ul>
      </div>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {
    albumName,
    albumTracks
  } = state.albumReducer;

  return {
    albumName,
    albumTracks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbumById: bindActionCreators(getAlbumById, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Album));