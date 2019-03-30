import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import {
  getAlbums
} from '../actions/itunesActions';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const AlbumItem = props => <li>
  <a href={props.collectionViewUrl}>{props.collectionName}</a>
</li>;

class Artist extends React.Component {
  componentWillMount() {
    this.props.getAlbums('jackson')
  }

  render() {
    const {
      classes,
      artistName,
      artistAlbums
    } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
          {artistName}
        </Typography>
        <ul>
          {artistAlbums.length ? artistAlbums.map(album => <AlbumItem key={album.collectionId} {...album}/>) : null}
        </ul>
      </div>
    );
  }
}

Artist.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {
    artistName,
    artistAlbums
  } = state.artistReducer;

  return {
    artistName,
    artistAlbums
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbums: bindActionCreators(getAlbums, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Artist));