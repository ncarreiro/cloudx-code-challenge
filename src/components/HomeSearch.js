import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
  setHomeSearchValue,
  setHomeSearchFilter
} from "../actions/homeActions";
import {getAlbums, getArtists} from "../actions/itunesActions";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class HomeSearch extends React.Component {
  handleType = event => {
    const {setHomeSearchValue} = this.props;
    setHomeSearchValue(event.target.value);
  };

  handleFilter = event => {
    const {setHomeSearchFilter} = this.props;
    setHomeSearchFilter(event.target.value);
  };

  handleSearch = () => {
    const {searchValue, searchFilter} = this.props;

    this.setState({
      showLoading: true
    });

    switch (searchFilter) {
      case 'artists': {
        return this.props.getArtists(searchValue)
          .then(() => this.setState({
            showLoading: false
          }))
      }
      case 'albums': {
        return this.props.getAlbums(searchValue)
          .then(() => this.setState({
            showLoading: false
          }))
      }
      default: {
        return false
      }
    }
  };

  render() {
    const {searchValue, searchFilter} = this.props;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.handleSearch(e);
        }}
      >
        <Grid
          container>
          <Grid item xs={8}>
            <FormControl
              fullWidth>
              <TextField
                fullWidth
                value={searchValue}
                placeholder="Search..."
                onChange={this.handleType}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl
              fullWidth>
              <Select
                value={searchFilter}
                onChange={this.handleFilter}
              >
                <MenuItem value="artists">Artists</MenuItem>
                <MenuItem value="albums">Albums</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    )
  }
}

function mapStateToProps(state) {
  const {
    artists,
    albums,
    searchValue,
    searchFilter
  } = state.homeReducer;

  return {
    artists,
    albums,
    searchValue,
    searchFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setHomeSearchValue: bindActionCreators(setHomeSearchValue, dispatch),
    setHomeSearchFilter: bindActionCreators(setHomeSearchFilter, dispatch),
    getArtists: bindActionCreators(getArtists, dispatch),
    getAlbums: bindActionCreators(getAlbums, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearch);