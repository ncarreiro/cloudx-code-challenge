import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {connect} from "react-redux";

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    overflow: 'hidden',
    width: 900,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function AlbumList(props) {
  const {classes, searchValue, albums} = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} cols={3} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
          <ListSubheader component="div">Albums found for '{searchValue}'</ListSubheader>
        </GridListTile>
        {albums.map(album => (
          <Link to={`/album/${album.collectionId}`}>
            <GridListTile key={album.collectionId}>
              <img src={album.artworkUrl100} alt={album.collectionName} style={{height: 300}}/>
              <GridListTileBar
                title={album.collectionName}
                subtitle={<span>by: {album.artistName}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon/>
                  </IconButton>
                }
              />
            </GridListTile>
          </Link>
        ))}
      </GridList>
    </div>
  );
}

AlbumList.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {
    artists,
    albums,
    searchValue
  } = state.homeReducer;

  const {
    showError
  } = state.dialogReducer;

  return {
    artists,
    albums,
    searchValue,
    showError
  }
}

export default withStyles(styles)(connect(mapStateToProps, {})(AlbumList));