import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {AlbumsList} from '../components';

import {
  getArtistAlbumsById,
  getArtistAlbumsByName
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

class ArtistView extends React.Component {
  componentDidMount() {
    const {history} = this.props;

    const {
      artistId,
      artistName
    } = this.props.match.params;

    if (artistId) {
      return this.props.getArtistAlbumsById(artistId);
    } else if (artistName) {
      return this.props.getArtistAlbumsByName(artistId)
    } else {
      history.push('/')
    }
  }

  render() {
    const {
      classes,
      artistName,
      artistAlbums,
    } = this.props;

    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}>
        <Typography variant="h4" gutterBottom>
          {artistName}
        </Typography>
        {artistAlbums.length > 0 ? <AlbumsList albums={artistAlbums}/> : null}
      </Grid>
    );
  }
}

ArtistView.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {
    artistName,
    artistAlbums
  } = state.artistReducer;

  return {
    artistName,
    artistAlbums
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArtistAlbumsById: bindActionCreators(getArtistAlbumsById, dispatch),
    getArtistAlbumsByName: bindActionCreators(getArtistAlbumsByName, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ArtistView));