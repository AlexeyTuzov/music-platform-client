import { Grid, IconButton } from '@material-ui/core';
import { Pause, PlayArrow, VolumeDown, VolumeUp } from '@material-ui/icons';
import { ChangeEvent, useEffect } from 'react';
import styles from './styles/Player.module.scss';
import SliderElement from '../Slider/Slider';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import timeFormat from '../../helpers/timeFormatter';

let audio: HTMLAudioElement;

const Player = () => {
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
			<Grid container>
				<Grid item xs={12} md={3}>
					<Grid container direction="row" className={styles.trackInfoContainer}>
						<Grid item className={styles.icon}>
							<IconButton onClickCapture={playerSwitch}>
								{pause ? <PlayArrow /> : <Pause />}
							</IconButton>
						</Grid>
						<Grid item direction="column" className={styles.trackInfo}>
							<div>{active?.name}</div>
							<div className={styles.divArtist}>{active?.artist}</div>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={styles.current} xs={12} md={5}>
					<SliderElement
						max={duration}
						current={currentTime}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							changeCurrentTime(e)
						}
						display={timeFormat(currentTime)}
					/>
				</Grid>
				<Grid item xs={12} md={4} direction="row">
					<Grid container direction="row">
						<VolumeDown className={styles.volume} />
						<SliderElement
							max={100}
							current={volume}
							onChange={(e: ChangeEvent<HTMLInputElement>) => changeVolume(e)}
						/>
						<VolumeUp className={styles.volume} />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Player;
