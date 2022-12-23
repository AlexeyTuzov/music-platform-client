import { Button, Grid } from '@material-ui/core';
import StepWrapper from '../../components/StepWrapper/StepWrapper';
import MainLayout from '../../layouts/Main.layout';
import { useState } from 'react';

const CreateTrack = () => {

    const [activeStep, setActiveStep] = useState(0);

    const next = () => {
        setActiveStep(activeStep + 1);
    }

    const back = () => {
        setActiveStep(activeStep -1)
    }

	return (
		<>
			<MainLayout>
                <StepWrapper activeStep={activeStep}>
                    Upload a track
                </StepWrapper>
                <Grid container justifyContent='space-between'>
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
