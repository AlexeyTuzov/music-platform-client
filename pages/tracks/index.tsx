import { Box, Button, Card, Grid, TextField } from '@material-ui/core';
import MainLayout from '../../layouts/main/Main.layout';
import { useRouter } from 'next/router';
import TrackList from '../../components/TrackList/TrackList';
import styles from './styles/index.module.scss';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import PublishIcon from '@material-ui/icons/Publish';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import debounce from '../../helpers/debounce';

const Tracks = () => {
	const router = useRouter();
	const [query, setQuery] = useState<string>('');

	const { tracks, error } = useTypedSelector((state) => state.tracksReducer);

	const { fetchTracks, searchTracks } = useActions();

	useEffect(() => {
		fetchTracks();
	}, []);

	const debouncedSearch = useCallback(debounce(searchTracks), []);

	const search = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		debouncedSearch();
	};

	if (error) {
		return (
			<MainLayout>
				<h1>{error}</h1>
			</MainLayout>
		);
	}

	return (
		<MainLayout title={'Musical platform - Tracks list'}>
			<Grid container justifyContent="center">
				<Card className={styles.card} raised={true}>
					<Box p={3} className={styles.box}>
						<Grid container justifyContent="space-between">
							<h1>Load track</h1>
							<Button onClick={() => router.push('/tracks/create')}>
								<span>Upload</span>
								<PublishIcon className={styles.publishIcon} />
							</Button>
						</Grid>
					</Box>
					<TextField
						fullWidth
						value={query}
						onChange={search}
						variant="outlined"
					/>
					<TrackList tracks={tracks} />
				</Card>
			</Grid>
		</MainLayout>
	);
};

export default Tracks;
