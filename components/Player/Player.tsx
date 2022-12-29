import { Grid, IconButton } from '@material-ui/core';
import { Pause, PlayArrow, VolumeDown, VolumeUp } from '@material-ui/icons';
import { ChangeEvent, FC, useEffect } from 'react';
import styles from './styles/Player.module.scss';
import SliderElement from '../Slider/Slider';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import timeFormat from '../../helpers/timeFormatter';

interface PlayerProps {
	active: boolean;
}

let audio: HTMLAudioElement;

const Player: FC<PlayerProps> = (props) => {
	const { pause, duration, volume, active, currentTime } = useTypedSelector(
		(state) => state.playerReducer
	);
	const { playTrack, pauseTrack, setDuration, setCurrentTime, setVolume } =
		useActions();

	useEffect(() => {
		if (!audio) {
			audio = new Audio();
		} else {
			setAudio();
		}
	}, [active]);

	useEffect(() => {
		if (active) {
			play();
		}
	}, [pause, active]);

	const setAudio = () => {
		if (active) {
			audio.src = 'http://localhost:5000/' + active.audio;
			audio.volume = volume / 100;
			audio.onloadedmetadata = () => {
				setDuration(audio.duration);
			};
			audio.ontimeupdate = () => {
				setCurrentTime(audio.currentTime);
			};
		}
	};

	const play = () => {
		if (!pause) {
			audio.play();
		} else {
			audio.pause();
		}
	};

	const playerSwitch = () => {
		if (pause) {
			playTrack();
		} else {
			pauseTrack();
		}
	};

	const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
		setVolume(Number(e.target.value));
		audio.volume = volume / 100;
	};

	const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentTime(Number(e.target.value));
		audio.currentTime = currentTime;
	};

	if (!active) {
		return null;
	}

	return (
		<div className={styles.player}>
			<IconButton className={styles.icon} onClickCapture={playerSwitch}>
				{pause ? <PlayArrow /> : <Pause />}
			</IconButton>
			<Grid
				container
				direction="column"
				style={{ width: 200, margin: '0 20px' }}
			>
				<div>{active?.name}</div>
				<div className={styles.divArtist}>{active?.artist}</div>
			</Grid>
			<SliderElement
				max={duration}
				current={currentTime}
				onChange={(e: ChangeEvent<HTMLInputElement>) => changeCurrentTime(e)}
				display={timeFormat(currentTime)}
			/>
			<VolumeDown className={styles.volume} />
			<SliderElement
				max={100}
				current={volume}
				onChange={(e: ChangeEvent<HTMLInputElement>) => changeVolume(e)}
			/>
			<VolumeUp />
		</div>
	);
};

export default Player;
