import { Box, Button, Card, Grid } from '@material-ui/core';
import MainLayout from '../../layouts/Main.layout';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/types';
import TrackList from '../../components/TrackList/TrackList';
import styles from './styles/index.module.scss';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';

const Tracks = () => {
	const router = useRouter();

	const { active } = useTypedSelector((state) => state.playerReducer);

	const { playTrack } = useActions();

	const tracks: ITrack[] = [
		{
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
		},
		{
			_id: '2',
			name: 'Track 2',
			artist: 'AIC',
			text: 'Lorem ipsum dolor sit amet',
			listens: 0,
			picture:
				'http://localhost:5000/picture/e7565bc0-03a2-4633-820b-13a2a07028c1.jpg',
			audio:
				'http://localhost:5000/audio/9d3403e5-ad2d-4bae-8c0b-51344c70c856.mp3',
			comments: []
		},
		{
			_id: '3',
			name: 'Track 3',
			artist: 'AIC',
			text: 'Lorem ipsum dolor sit amet',
			listens: 0,
			picture:
				'http://localhost:5000/picture/e7565bc0-03a2-4633-820b-13a2a07028c1.jpg',
			audio:
				'http://localhost:5000/audio/9d3403e5-ad2d-4bae-8c0b-51344c70c856.mp3',
			comments: []
		}
	];
	return (
		<MainLayout>
			<Grid container justifyContent="center">
				<Card className={styles.card} raised={true}>
					<Box p={3} className={styles.box}>
						<Grid container justifyContent="space-between">
							<h1>Load track</h1>
							<Button onClick={() => router.push('/tracks/create')}>
								Upload
							</Button>
						</Grid>
					</Box>
					<TrackList tracks={tracks} />
				</Card>
			</Grid>
		</MainLayout>
	);
};

export default Tracks;
