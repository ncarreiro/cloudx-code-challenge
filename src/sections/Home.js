import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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

const ArtistItem = props => <li>
  {props.artistName} - <a href={props.artistLinkUrl}>Go to Artist Page</a>
</li>;

const AlbumItem = props => <li>
  {props.collectionName} - <a href={props.collectionViewUrl}>Go to Album Page</a>
</li>;

class Home extends React.Component {
  state = {
    searchFilter: 'artists',
    searchValue: ''
  };

  handleFilter = filterValue => {
    this.setState({
      searchFilter: filterValue
    });
  };

  handleSearch = () => {
    switch (this.state.searchFilter) {
      case 'artists': {
        return this.props.getArtists(this.state.searchValue)
      }
      case 'albums': {
        return this.props.getAlbums(this.state.searchValue)
      }
      default: {
        return false
      }
    }
  };

  render() {
    const {
      classes,
      artists,
      albums
    } = this.props;

    const {
      searchFilter
    } = this.state;

    return (
      <div className={classes.root}>
        {/*<Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>*/}
        <Typography variant="h2" gutterBottom>
          CloudX Code Challenge
        </Typography>
        <Typography variant="h6" gutterBottom>
          iTunes Artist and Album search by Nahuel Carreiro
        </Typography>
        <form onSubmit={e => { e.preventDefault()}}>
          <TextField
            hintText="Search..."
            value={this.state.searchValue}
            onChange={event => this.setState({searchValue: event.target.value})}
          />
          <Button
            type="submit"
            color="secondary"
            onClick={() => this.handleSearch()}>
            BUSCAR
          </Button>
        </form>
        <Button variant="contained" color={searchFilter === 'artists' ? 'secondary' : 'primary'} onClick={() => this.handleFilter('artists')}>
          GET ARTISTS
        </Button>
        <Button variant="contained" color={searchFilter === 'albums' ? 'secondary' : 'primary'} onClick={() => this.handleFilter('albums')}>
          GET ALBUMS
        </Button>
        <ul>
          {artists.length > 0 && artists.map(artist => <ArtistItem key={artist.artistId} {...artist}/>)}
        </ul>
        <ul>
          {albums.length > 0 && albums.map(album => <AlbumItem key={album.collectionId} {...album}/>)}
        </ul>

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