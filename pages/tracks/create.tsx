import { Button, Container, Grid } from '@material-ui/core';
import StepWrapper from '../../components/StepWrapper/StepWrapper';
import MainLayout from '../../layouts/Main.layout';
import { useState } from 'react';
import TrackForm from '../../components/TrackForm/TrackForm';
import FileUploader from '../../components/FileUploader/FileUploader';
import FileTypes from '../../components/FileUploader/enums/FileTypes';

const CreateTrack = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [audio, setAudio] = useState(null);
	const [picture, setPicture] = useState(null);

	const next = () => {
		setActiveStep(activeStep + 1);
	};

	const back = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<>
			<MainLayout>
				<StepWrapper activeStep={activeStep}>
					{activeStep === 0 && <TrackForm />}
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
