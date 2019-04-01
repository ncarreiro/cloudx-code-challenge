import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import {
  ArtistItem,
  AlbumList,
  HomeSearch,
  Snackbar
} from '../components';

import {
  showError,
} from '../actions/dialogActions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
  },
});

const ArtistList = styled.div`
  display: flex;
  flex-direction: column;
`;

class Home extends React.Component {
  state = {
    showLoading: false,
    showError: false,
  };

  render() {
    const {
      classes,
      artists,
      albums,
      showError
    } = this.props;

    const {
      showLoading,
    } = this.state;

    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        className={classes.root}>
        <Snackbar
          open={showError}
          message={'Error: No results found!'}
        />
        <Typography variant="h6" gutterBottom>
          Search for Artists or Albums
        </Typography>
        <HomeSearch/>
        {showLoading ? <Typography variant="h4" gutterBottom>
          Searching...
        </Typography> : null}
        {artists.length > 0 ? <ArtistList>
          {artists.map(artist => (
            <Link to={`/artist/${artist.artistName}`}>
              <ArtistItem key={artist.artistId} {...artist}/>
            </Link>
          ))}
        </ArtistList> : null}
        {albums.length > 0 ? <AlbumList albums={albums}/> : null}
      </Grid>
    );
  }
}

Home.propTypes = {
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

function mapDispatchToProps(dispatch) {
  return {
    showError: bindActionCreators(showError, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home));