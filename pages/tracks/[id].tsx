import { Button, Grid, TextField } from '@material-ui/core';
import MainLayout from '../../layouts/main/Main.layout';
import { ITrack } from '../../types/types';
import { useRouter } from 'next/router';
import styles from './styles/[id].module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useInput from '../../hooks/useInput';
import useActions from '../../hooks/useActions';

const TrackPage = () => {
	const router = useRouter();

	const id = router.query.id?.toString() || '';

	const track: ITrack = {
		_id: '',
		name: '',
		artist: '',
		text: '',
		listens: 0,
		picture: '',
		audio: '',
		comments: []
	};

	const [loadedTrack, setLoadedTrack] = useState(track);
	const usernameHandler = useInput();
	const commentTextHandler = useInput();
	const { uploadComment } = useActions();

	useEffect(() => {
		axios
			.get('http://localhost:5000/tracks/' + id)
			.then((res) => setLoadedTrack(res.data))
			.catch((err) => {
				console.log(err);
			});
	}, [loadedTrack]);

	const addComment = () => {
		uploadComment({
			username: usernameHandler.value,
			text: commentTextHandler.value,
			_id: loadedTrack._id
		});
	};

	return (
		<MainLayout
			title={`Musical platform - ${loadedTrack.artist} - ${loadedTrack.name}`}
		>
			<Button
				onClick={() => router.push('/tracks')}
				variant="outlined"
				style={{ color: 'blue', fontSize: '20px' }}
			>
				To tracks list
			</Button>
			<Grid container>
				<img
					src={`http://localhost:5000/${loadedTrack.picture}`}
					className={styles.img}
				/>
				<div className={styles.div}>
					<h2>{loadedTrack.name}</h2>
					<h2>{loadedTrack.artist}</h2>
					<h2>Listens: {loadedTrack.listens}</h2>
				</div>
			</Grid>
			<h2> Lyrics </h2>
			<p>{loadedTrack.text}</p>
			<Grid container>
				<TextField
					value={usernameHandler.value}
					onChange={usernameHandler.onChange}
					label="Your Name"
					fullWidth
					variant="outlined"
				/>
				<TextField
					value={commentTextHandler.value}
					onChange={commentTextHandler.onChange}
					label="Comment"
					fullWidth
					multiline
					minRows={4}
					variant="outlined"
				/>
				<Button onClick={addComment}>Submit</Button>
			</Grid>
			<div className={styles.commentsBlockDiv}>
				{loadedTrack?.comments?.map((comment) => (
					<div className={styles.commentDiv}>
						<div className={styles.username}>{comment.username}</div>
						<div>{comment.text}</div>
					</div>
				))}
			</div>
		</MainLayout>
	);
};

export default TrackPage;
