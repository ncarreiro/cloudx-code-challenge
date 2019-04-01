import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

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
    paddingTop: theme.spacing.unit * 10,
  },
});

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
        alignItems="stretch"
        className={classes.root}>
        <Snackbar
          open={showError}
          message={'Error: No results found!'}
        />
        <Grid item xs={12}>
          <Typography
            variant="h4"
            color="primary"
            gutterBottom>
            Search for Artists or Albums
          </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="stretch"
        >
          <HomeSearch/>
        </Grid>
        {showLoading ? <Typography variant="h4" gutterBottom>
          Searching...
        </Typography> : null}
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