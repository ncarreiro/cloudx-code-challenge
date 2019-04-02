import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {Loader} from '../components';

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

const TrackItem = props => (
  <TableRow key={props.trackId}>
    <TableCell component="th" scope="props">
      {props.trackNumber}
    </TableCell>
    <TableCell component="th" scope="props">
      {props.trackName}
    </TableCell>
    <TableCell align="right"><Moment format="mm:ss">{props.trackTimeMillis}</Moment></TableCell>
    <TableCell align="right">{props.primaryGenreName}</TableCell>
    <TableCell align="right">{props.collectionPrice}</TableCell>
  </TableRow>
);

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
      <div>
        {showLoader ?
          <Grid
            container
            justify="center"
            alignItems="stretch"
          >
          <Loader/>
        </Grid> : <Grid
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
          <Typography variant="h4" gutterBottom>
            {albumName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            by {artistName}
          </Typography>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell/>
                <TableCell>Name</TableCell>
                <TableCell align="right">Duration</TableCell>
                <TableCell align="right">Genre</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {albumTracks.length ? albumTracks.map(track => <TrackItem key={track.trackId} {...track}/>) : null}
            </TableBody>
          </Table>
        </Grid>}
      </div>
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