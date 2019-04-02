import React from 'react';
import {connect} from "react-redux";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {
  AlbumItem,
  Pagination
} from '.';

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

    const totalAlbums = allAlbums.length;
    if (totalAlbums === 0) return null;

    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              {currentAlbums.map(album => <AlbumItem {...album}/>)}
            </Grid>
          </Grid>
        </Grid>

        <Pagination
          totalRecords={totalAlbums}
          pageLimit={9}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />

        {currentPage && (
          <Typography variant="body1">
            Page <strong>{ currentPage }</strong> / <strong>{ totalPages }</strong>
          </Typography>
        )}
      </div>
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

export default connect(mapStateToProps, {})(AlbumList);