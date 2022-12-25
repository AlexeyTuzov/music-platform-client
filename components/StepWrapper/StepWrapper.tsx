import {
	Card,
	Container,
	Grid,
	Step,
	StepLabel,
	Stepper
} from '@material-ui/core';
import { FC, ReactNode } from 'react';
import styles from './styles/StepWrapper.module.scss';

interface StepWrapperProps {
	activeStep: number;
	children: NonNullable<ReactNode>;
}

const steps = ['Track info', 'Upload picture', 'Upload audio'];

const StepWrapper: FC<StepWrapperProps> = (props) => {
	return (
		<Container>
			<Stepper activeStep={props.activeStep}>
				{steps.map((step, index) => (
					<Step key={index} active={props.activeStep > index}>
						<StepLabel>{step}</StepLabel>
					</Step>
				))}
			</Stepper>
			<Grid container className={styles.grid}>
				<Card className={styles.card}>{props.children}</Card>
			</Grid>
		</Container>
	);
};

export default StepWrapper;
