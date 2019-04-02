import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import {Pagination} from '.';

const styles = theme => ({
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

class ArtistsList extends React.Component {
  state = {allArtists: [], currentArtists: [], currentPage: null, totalPages: null};

  componentDidMount() {
    this.setState({ allArtists: this.props.artists });
  };

  onPageChanged = data => {
    const {allArtists} = this.state;
    const {currentPage, totalPages, pageLimit} = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentArtists = allArtists.slice(offset, offset + pageLimit);

    this.setState({currentPage, currentArtists, totalPages});
  };

  render() {
    const {allArtists, currentArtists, currentPage, totalPages} = this.state;
    const {classes} = this.props;

    const totalArtists = allArtists.length;
    if (totalArtists === 0) return null;

    return (
      <Grid item xs={12}>
        <Typography variant="h5">
          <strong className="text-secondary">{totalArtists}</strong> Artists
        </Typography>

        {currentPage && (
          <Typography variant="body1">
            Page <strong>{ currentPage }</strong> / <strong>{ totalPages }</strong>
          </Typography>
        )}

        {currentArtists.map(artist => (
          <Grid
            key={artist.artistId}
            container
          >
            <Grid item md={3}/>
            <Grid item xs={12} md={6}>
              <Link
                to={`/artist/${artist.artistId}`}
                // to={`/artist/${artist.artistName
                //   .toLowerCase()
                //   .replace(/[^\w\s]/gi, '')
                //   .replace(/ /g,"+")}`}
              >
                <Paper className={classes.paper}>
                  <GridListTileBar
                    title={artist.artistName}
                    actionIcon={
                      <IconButton className={classes.icon}>
                        <InfoIcon/>
                      </IconButton>
                    }
                  />
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={0} md={3}/>
          </Grid>
        ))}

        <Pagination
          totalRecords={totalArtists}
          pageLimit={10}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />
      </Grid>
    )
  }
}

ArtistsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {
    artists,
  } = state.homeReducer;

  const {
    showError
  } = state.dialogReducer;

  return {
    artists,
    showError
  }
}

export default withStyles(styles)(connect(mapStateToProps, {})(ArtistsList));