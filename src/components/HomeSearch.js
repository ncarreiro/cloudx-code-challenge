import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {Loader} from '.';

import {
  setHomeSearchValue,
  setHomeSearchFilter
} from "../actions/homeActions";

import {getAlbums, getArtists} from "../actions/itunesActions";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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

    if (searchValue) {
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
    }
  };

  render() {
    const {
      searchValue,
      searchFilter,
      showLoader
    } = this.props;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.handleSearch(e);
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              color="primary"
              gutterBottom>
              Search for Artists or Albums
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            md={2}
          />
          <Grid
            item
            xs={7}
            md={6}
          >
            <FormControl
              fullWidth
              style={{marginTop: '1px'}}
            >
              <TextField
                fullWidth
                value={searchValue}
                placeholder="Search..."
                onChange={this.handleType}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={3}
            md={2}
          >
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
          <Grid
            item
            xs={1}
            md={2}
          />
          {showLoader ? <Loader/> : null}
        </Grid>
      </form>
    )
  }
}

function mapStateToProps(state) {
  const {showLoader} = state.loaderReducer;

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
    searchFilter,
    showLoader
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