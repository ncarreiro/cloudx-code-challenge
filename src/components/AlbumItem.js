import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = () => ({
  paper: {
    position: 'relative',
    width: '100%'
  },
  img: {
    width: '100%'
  },
});

class AlbumItem extends React.Component {
  render() {
    const {
      classes,
      artistName,
      collectionId,
      collectionName,
      artworkUrl100
    } = this.props;
    return (
      <Grid
        key={collectionId}
        item
        xs={12}
        md={4}
        lg={3}
      >
        <Link
          to={`/album/${collectionId}`}
        >
          <Paper
            className={classes.paper}
          >
            <img
              className={classes.img}
              src={artworkUrl100}
              alt={collectionName}/>
            <GridListTileBar
              title={collectionName}
              subtitle={<span>by: {artistName}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </Paper>
        </Link>
      </Grid>
    );
  }
}

AlbumItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumItem);