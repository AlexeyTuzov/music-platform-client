import { Grid, IconButton } from '@material-ui/core';
import { Pause, PlayArrow, VolumeDown, VolumeUp } from '@material-ui/icons';
import { FC } from 'react';
import styles from './styles/Player.module.scss';
import SliderElement from '../Slider/Slider';
import { ITrack } from '../../types/types';

interface PlayerProps {
	active: boolean;
}

const Player: FC<PlayerProps> = (props) => {
	const track: ITrack = {
		_id: '1',
		name: 'Track 1',
		artist: 'AIC',
		text: 'Lorem ipsum dolor sit amet',
		listens: 0,
		picture:
			'http://localhost:5000/picture/e7565bc0-03a2-4633-820b-13a2a07028c1.jpg',
		audio:
			'http://localhost:5000/audio/9d3403e5-ad2d-4bae-8c0b-51344c70c856.mp3',
		comments: []
	};

	let active = props.active;

	return (
		<div className={styles.player}>
			<IconButton className={styles.icon} onClick={(e) => e.stopPropagation()}>
				{active ? <Pause /> : <PlayArrow />}
			</IconButton>
			<Grid
				container
				direction="column"
				style={{ width: 200, margin: '0 20px' }}
			>
				<div>{track.name}</div>
				<div className={styles.divArtist}>{track.artist}</div>
			</Grid>
			<SliderElement left={0} right={100} onChange={() => ({})} />
			<VolumeDown className={styles.volume} />
			<SliderElement left={0} right={100} onChange={() => ({})} />
			<VolumeUp />
		</div>
	);
};

export default Player;
