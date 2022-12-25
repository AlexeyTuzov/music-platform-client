import { FC } from 'react';
import { ITrack } from '../../types/types';
import { Box, Grid } from '@material-ui/core';
import TrackItem from '../TrackItem/TrackItem';

interface TrackListProps {
	tracks: ITrack[];
}

const TrackList: FC<TrackListProps> = (props) => {
	return (
		<Grid container direction="column">
			<Box p={2}>
				{props.tracks.map((track) => (
					<TrackItem key={track._id} track={track} />
				))}
			</Box>
		</Grid>
	);
};

export default TrackList;
