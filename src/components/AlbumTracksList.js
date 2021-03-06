import React from 'react';
import Moment from 'react-moment';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const TrackItem = props => (
  <TableRow key={props.trackId}>
    <TableCell align="center">
      {props.trackNumber}
    </TableCell>
    <TableCell>
      {props.trackName}
    </TableCell>
    <TableCell align="right">{props.primaryGenreName}</TableCell>
    <TableCell align="right"><Moment format="mm:ss">{props.trackTimeMillis}</Moment></TableCell>
  </TableRow>
);

class AlbumTracksList extends React.Component {
  render() {
    const {
      albumTracks
    } = this.props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell/>
            <TableCell>Name</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albumTracks.length ? albumTracks.map(track => <TrackItem key={track.trackId} {...track}/>) : null}
        </TableBody>
      </Table>
    )
  }
}

export default AlbumTracksList;