import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import {
  getArtists,
  getAlbums
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

class Home extends React.Component {
  // state = {
  //   open: false,
  // };

  // handleClose = () => {
  //   this.setState({
  //     open: false,
  //   });
  // };

  // handleClick = () => {
  //   this.setState({
  //     open: true,
  //   });
  // };

  render() {
    const {
      classes,
      artists,
      albums
    } = this.props;
    // const { open } = this.state;

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
        <Button variant="contained" color="secondary" onClick={this.props.getArtists.bind(this)}>
          GET ARTISTS
        </Button>
        <ul>
          {artists.map(artist => <ArtistItem key={artist.artistId} {...artist}/>)}
        </ul>
        <ul>
          {albums.map(artist => <ArtistItem key={artist.artistId} {...artist}/>)}
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
    getAlbums: bindActionCreators(getAlbums, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home));