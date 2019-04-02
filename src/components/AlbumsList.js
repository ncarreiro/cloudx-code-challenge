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
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    position: 'relative',
    height: 300,
    width: 300,
  },
  img: {
    width: '100%',
    height: 300
  },
});

class AlbumList extends React.Component {
  state = {allAlbums: [], currentAlbums: [], currentPage: null, totalPages: null};

  componentDidMount() {
    this.setState({ allAlbums: this.props.albums });
  };

  onPageChanged = data => {
    const {allAlbums} = this.state;
    const {currentPage, totalPages, pageLimit} = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentAlbums = allAlbums.slice(offset, offset + pageLimit);

    this.setState({currentPage, currentAlbums, totalPages});
  };

  render() {
    const {allAlbums, currentAlbums, currentPage, totalPages} = this.state;
    const {classes} = this.props;

    const totalAlbums = allAlbums.length;
    if (totalAlbums === 0) return null;

    return (
      <div className={classes.root}>
        {currentPage && (
          <Typography variant="body1">
            Page <strong>{ currentPage }</strong> / <strong>{ totalPages }</strong>
          </Typography>
        )}

        <Pagination
          totalRecords={totalAlbums}
          pageLimit={9}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />

        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              {currentAlbums.map(album => (
                <Grid key={album.collectionId} item>
                  <Link
                    to={`/album/${album.collectionId}`}
                  >
                    <Paper className={classes.paper}>
                      <img
                        className={classes.img}
                        src={album.artworkUrl100}
                        alt={album.collectionName}/>
                      <GridListTileBar
                        title={album.collectionName}
                        subtitle={<span>by: {album.artistName}</span>}
                        actionIcon={
                          <IconButton className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </Paper>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AlbumList.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {
    showError
  } = state.dialogReducer;

  return {
    showError
  }
}

export default withStyles(styles)(connect(mapStateToProps, {})(AlbumList));