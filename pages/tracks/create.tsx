import { Button, Container, Grid } from '@material-ui/core';
import StepWrapper from '../../components/StepWrapper/StepWrapper';
import MainLayout from '../../layouts/main/Main.layout';
import { useState } from 'react';
import TrackForm from '../../components/TrackForm/TrackForm';
import FileUploader from '../../components/FileUploader/FileUploader';
import FileTypes from '../../components/FileUploader/enums/FileTypes';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useRouter } from 'next/router';

const CreateTrack = () => {
	const router = useRouter();

	const [activeStep, setActiveStep] = useState(0);
	const [audio, setAudio] = useState(null);
	const [picture, setPicture] = useState(null);
	const trackNameHandler = useInput();
	const artistNameHandler = useInput();
	const textHandler = useInput();

	const next = () => {
		setActiveStep(activeStep + 1);
		if (activeStep === 2) {
			const formData = new FormData();
			formData.append('name', trackNameHandler.value);
			formData.append('artist', artistNameHandler.value);
			formData.append('text', textHandler.value);
			formData.append('picture', picture ? picture : '');
			formData.append('audio', audio ? audio : '');
			axios
				.post('http://localhost:5000/tracks', formData)
				.then(() => {
					router.push('/tracks');
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const back = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<>
			<MainLayout>
				<StepWrapper activeStep={activeStep}>
					{activeStep === 0 && (
						<TrackForm
							trackNameHandler={trackNameHandler}
							artistNameHandler={artistNameHandler}
							textHandler={textHandler}
						/>
					)}
					{activeStep === 1 && (
						<FileUploader fileType={FileTypes.PICTURE} setFile={setPicture}>
							<Button>Upload Picture</Button>
						</FileUploader>
					)}
					{activeStep === 2 && (
						<FileUploader fileType={FileTypes.AUDIO} setFile={setAudio}>
							<Button>Upload audio</Button>
						</FileUploader>
					)}
				</StepWrapper>
				<Grid container justifyContent="space-between">
					<Button onClick={back} disabled={activeStep === 0}>
						Back
					</Button>
					<Button onClick={next} disabled={activeStep === 3}>
						Next
					</Button>
				</Grid>
			</MainLayout>
		</>
	);
};

export default CreateTrack;
