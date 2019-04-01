import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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

function AlbumList(props) {
  const {classes, albums, searchValue} = props;

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>Results for Albums: {searchValue}</Typography>
      <Grid container className={classes.albumListContainer} spacing={16}>
        <Grid item xs={16}>
          <Grid container justify="center" spacing={16}>
            {albums.map(album => (
              <Grid key={album.collectionId} item>
                <Link
                  to={`/album/${album.collectionId}`}
                >
                  <Paper className={classes.paper} key={album.collectionId}>
                    <img className={classes.img} src={album.artworkUrl100} alt={album.collectionName}/>
                    <div className={classes.imgText}>
                      <GridListTileBar
                        title={album.collectionName}
                        subtitle={<span>by: {album.artistName}</span>}
                        actionIcon={
                          <IconButton className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </div>
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