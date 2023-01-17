import { Card, Grid } from '@material-ui/core';
import { FC, ReactElement } from 'react';
import styles from './styles/CenterCard.module.scss';

interface CenterCardProps {
	children: NonNullable<ReactElement>;
}

const CenterCard: FC<CenterCardProps> = (props) => {
	return (
		<Grid container justifyContent="center" xs={12} md={10}>
			<Card className={styles.card} raised={true}>
				{props.children}
			</Card>
		</Grid>
	);
};

export default CenterCard;
