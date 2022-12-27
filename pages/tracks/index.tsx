import { Box, Button, Card, Grid } from '@material-ui/core';
import MainLayout from '../../layouts/Main.layout';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/types';
import TrackList from '../../components/TrackList/TrackList';
import styles from './styles/index.module.scss';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import { useEffect } from 'react';

const Tracks = () => {
	const router = useRouter();

	const {tracks, error} = useTypedSelector((state) => state.tracksReducer);

	const {fetchTracks} = useActions();

    useEffect(() => {
        fetchTracks();
    }, []);

    if (error) {
        return (
            <MainLayout>
                <h1>{error}</h1>
            </MainLayout>
        )
    }

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
