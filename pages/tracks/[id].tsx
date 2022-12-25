import { Button, Grid, TextField } from '@material-ui/core';
import MainLayout from '../../layouts/Main.layout';
import { ITrack } from '../../types/types';
import { useRouter } from 'next/router';
import styles from './styles/[id].module.scss';

const TrackPage = () => {
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

	const router = useRouter();

	return (
		<MainLayout>
			<Button
				onClick={() => router.push('/tracks')}
				variant="outlined"
				style={{ color: 'blue', fontSize: '20px' }}
			>
				To tracks list
			</Button>
			<Grid container>
				<img src={track.picture} className={styles.img} />
				<div className={styles.div}>
					<h2>{track.name}</h2>
					<h2>{track.artist}</h2>
					<h2>Listens: {track.listens}</h2>
				</div>
			</Grid>
			<h2> Lyrics </h2>
			<p>{track.text}</p>
			<Grid container>
				<TextField label="Your Name" fullWidth variant="outlined" />
				<TextField
					label="Comment"
					fullWidth
					multiline
					minRows={4}
					variant="outlined"
				/>
				<Button>Submit</Button>
			</Grid>
			<div>
				{track.comments.map((comment) => (
					<div>
						<div>{comment.username}</div>
						<div>{comment.text}</div>
					</div>
				))}
			</div>
		</MainLayout>
	);
};

export default TrackPage;
