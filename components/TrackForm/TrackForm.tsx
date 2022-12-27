import { Grid, TextField } from '@material-ui/core';
import styles from './styles/TrackForm.module.scss';
import { ChangeEvent, FC } from 'react';

interface TrackFormProps {
    trackNameHandler: {value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void}
    artistNameHandler: {value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void}
    textHandler: {value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void}
}

const TrackForm: FC<TrackFormProps> = (props) => {
	return (
		<Grid container direction="column" className={styles.grid}>
			<TextField
            value={props.trackNameHandler.value}
            onChange={props.trackNameHandler.onChange}
				label="Track name"
				variant="outlined"
				fullWidth
				style={{ marginTop: 10 }}
			/>
			<TextField
            value={props.artistNameHandler.value}
            onChange={props.artistNameHandler.onChange}
				label="Artist name"
				variant="outlined"
				style={{ marginTop: 10 }}
			/>
			<TextField
            value={props.textHandler.value}
            onChange={props.textHandler.onChange}
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
