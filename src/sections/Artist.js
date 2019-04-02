import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {
  AlbumsList,
  Loader
} from '../components';

import {
  getArtistAlbumsById,
  getArtistAlbumsByName
} from '../actions/itunesActions';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4
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
  state = {
    selectedArtistId: ''
  };

  componentDidMount() {
    const {
      artistId
    } = this.props.match.params;

    this.setArtistId(artistId);
    this.props.getArtistAlbumsById(artistId);
  }

  setArtistId(artistId) {
    this.setState({selectedArtistId: artistId})
  }

  componentWillReceiveProps(newProps) {
    const {artistId} = newProps.match.params;
    const {selectedArtistId} = this.state;
    if (artistId === selectedArtistId) {
      return true
    }
    this.props.getArtistAlbumsById(artistId);
  }

  render() {
    const {
      classes,
      artistName,
      artistAlbums,
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
        </Grid> : <Grid item>
          <Typography variant="h4" gutterBottom>
            {artistName}
          </Typography>
          {artistAlbums.length > 0 ? <AlbumsList albums={artistAlbums}/> : null}
        </Grid>}
      </Grid>
    );
  }
}

ArtistView.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {showLoader} = state.loaderReducer;
  const {
    artistName,
    artistAlbums
  } = state.artistReducer;

  return {
    artistName,
    artistAlbums,
    showLoader
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArtistAlbumsById: bindActionCreators(getArtistAlbumsById, dispatch),
    getArtistAlbumsByName: bindActionCreators(getArtistAlbumsByName, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ArtistView));