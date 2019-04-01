import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import {
  ArtistItem,
  AlbumItem
} from '../components';

import {
  getArtists,
  getAlbums,
} from '../actions/itunesActions';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Home extends React.Component {
  state = {
    showLoading: false,
    showError: false,
    searchFilter: 'artists',
    searchValue: '',
    firstSearch: false
  };

  handleFilter = filterValue => {
    this.setState({
      searchFilter: filterValue
    });
  };

  handleSearch = () => {
    const {searchValue} = this.state;
    this.setState({
      showLoading: true,
    });
    switch (this.state.searchFilter) {
      case 'artists': {
        return this.props.getArtists(searchValue)
          .then(response => this.setState({
            showLoading: false,
            showError: !response.length
          }))
      }
      case 'albums': {
        return this.props.getAlbums(searchValue)
          .then(response => this.setState({
            showLoading: false,
            showError: !response.length
          }))
      }
      default: {
        return false
      }
    }
  };

  handleCloseError = () => {
    this.setState({
      showError: false
    })
  };

  render() {
    const {
      classes,
      artists,
      albums
    } = this.props;

    const {
      showLoading,
      showError,
      searchFilter,
      searchValue
    } = this.state;

    return (
      <div className={classes.root}>
        <Dialog open={showError} onClose={() => this.handleCloseError()}>
          <DialogTitle>Error</DialogTitle>
          <DialogContent>
            <DialogContentText>No results found!</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => this.handleCloseError()}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h2" gutterBottom>
          CloudX Code Challenge
        </Typography>
        <Typography variant="h6" gutterBottom>
          iTunes Artist and Album search by Nahuel Carreiro
        </Typography>
        <br/>
        <form
          onSubmit={e => {
            e.preventDefault()
          }}
          style={{display: 'flex', justifyContent: 'center', alignItems: 'bottom'}}
        >
          <TextField
            placeholder="Search..."
            value={searchValue}
            onChange={event => this.setState({searchValue: event.target.value})}
          />
          <Button
            type="submit"
            color="secondary"
            onClick={() => this.handleSearch()}>
            BUSCAR
          </Button>
        </form>
        <br/>
        <Button variant="contained" color={searchFilter === 'artists' ? 'secondary' : 'primary'}
                onClick={() => this.handleFilter('artists')}>
          GET ARTISTS
        </Button>
        <Button variant="contained" color={searchFilter === 'albums' ? 'secondary' : 'primary'}
                onClick={() => this.handleFilter('albums')}>
          GET ALBUMS
        </Button>
        <br/>
        {showLoading ? <Typography variant="h4" gutterBottom>
          Searching...
        </Typography> : null}
        {searchValue && <div>
          {searchFilter === 'artists' ? <ul>
            {artists.length > 0 ? artists.map(artist => <Link to={`/artist/${artist.artistName}`}>
              <ArtistItem key={artist.artistId} {...artist}/>
            </Link>) : null}
          </ul> : null}
          {searchFilter === 'albums' ? <ul>
            {albums.length > 0 ? albums.map(album => <AlbumItem key={album.collectionId} {...album}/>) : null}
          </ul> : null}
        </div>}
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {
    artists,
    albums
  } = state.homeReducer;

  return {
    artists,
    albums
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArtists: bindActionCreators(getArtists, dispatch),
    getAlbums: bindActionCreators(getAlbums, dispatch),
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home));