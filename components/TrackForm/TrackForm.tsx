import { Grid, TextField } from '@material-ui/core';
import styles from './styles/TrackForm.module.scss';

const TrackForm = () => {
	return (
		<Grid container direction="column" className={styles.grid}>
			<TextField
				label="Track name"
				variant="outlined"
				fullWidth
				style={{ marginTop: 10 }}
			/>
			<TextField
				label="Artist name"
				variant="outlined"
				style={{ marginTop: 10 }}
			/>
			<TextField
				label="Track lyrics"
				multiline
				minRows={3}
				variant="outlined"
				style={{ marginTop: 10 }}
			/>
		</Grid>
	);
};

export default TrackForm;
