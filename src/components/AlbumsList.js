import React from 'react';
import {connect} from "react-redux";

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import {
  AlbumItem,
  Pagination
} from '.';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  }
});

class AlbumList extends React.Component {
  state = {allAlbums: [], currentAlbums: [], currentPage: null, totalPages: null};

  componentDidMount() {
    this.setState({allAlbums: this.props.albums});
  };

  onPageChanged = data => {
    const {allAlbums} = this.state;
    const {currentPage, totalPages, pageLimit} = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentAlbums = allAlbums.slice(offset, offset + pageLimit);

    this.setState({currentPage, currentAlbums, totalPages});
  };

  render() {
    const {classes} = this.props;
    const {allAlbums, currentAlbums} = this.state;

    const totalAlbums = allAlbums.length;
    if (totalAlbums === 0) return null;

    return (
      <Grid
        container
        alignContent="stretch"
        alignItems="stretch"
        className={classes.root}
      >
        <Grid
          container
          spacing={16}
        >
          {currentAlbums.map(album => <AlbumItem key={album.collectionId} {...album}/>)}
        </Grid>

        <Pagination
          totalRecords={totalAlbums}
          pageLimit={16}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const {
    showError
  } = state.dialogReducer;

  return {
    showError
  }
}

export default withStyles(styles)(connect(mapStateToProps, {})(AlbumList));