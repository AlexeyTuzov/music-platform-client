import { FC, useState } from 'react';
import { ITrack } from '../../types/types';
import styles from './styles/TrackItem.module.scss';
import { Card, Grid, IconButton } from '@material-ui/core';
import { Delete, Pause, PlayArrow } from '@material-ui/icons';
import { useRouter } from 'next/router';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

interface TrackItemProps {
	track: ITrack;
	active?: boolean;
}

const TrackItem: FC<TrackItemProps> = (props) => {
	const router = useRouter();
    const [isTrackPlaying, SetIsTrackPlaying] = useState(false);

    const {playTrack, pauseTrack, setActive} = useActions();
    const {pause, active} = useTypedSelector(state => state.playerReducer);

    const play = (e: any) => {
        e.stopPropagation();
        setActive(props.track);
        if (!isTrackPlaying) {
            playTrack();
            SetIsTrackPlaying(true);
        } else {
            pauseTrack();
            SetIsTrackPlaying(false);
        }
    }

	return (
		<Card
			className={styles.track}
			onClick={() => router.push(`/tracks/${props.track._id}`)}
		>
			<IconButton className={styles.icon} onClick={(e) => play(e)}>
				{(active?._id === props.track._id) && !pause ? <Pause /> : <PlayArrow />}
			</IconButton>
			<img className={styles.img} src={'http://localhost:5000/' + props.track.picture} />
			<Grid container direction="column" className={styles.trackNameGrid}>
				<div>{props.track.name}</div>
				<div className={styles.artistName}>{props.track.artist}</div>
			</Grid>
			<IconButton
				style={{ marginLeft: 'auto' }}
				onClick={(e) => e.stopPropagation()}
			>
				<Delete />
			</IconButton>
		</Card>
	);
};

export default TrackItem;
