import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import {
  ArtistsList,
  AlbumsList,
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
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    height: 'calc(100vh - 200px)'
  },
});

class Home extends React.Component {
  state = {
    showError: false,
  };

  render() {
    const {
      classes,
      artists,
      albums,
      showError,
    } = this.props;

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Snackbar
          open={showError}
          message={'Error: No results found!'}
        />
        <Grid item xs={12}>
          <HomeSearch/>
        </Grid>
        {artists.length > 0 ? <ArtistsList artists={artists}/> : null}
        {albums.length > 0 ? <AlbumsList albums={albums}/> : null}
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {showError} = state.dialogReducer;

  const {
    artists,
    albums
  } = state.homeReducer;

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