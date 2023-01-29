import { Box, Grid, IconButton } from '@material-ui/core';
import CenterCard from '../CenterCard/CenterCard';
import styles from './styles/Start.module.scss';
import { useRouter } from 'next/router';
import Play from '@material-ui/icons/PlayCircleOutline';

const Start = () => {
	const router = useRouter();

	return (
		<>
			<CenterCard>
				<Grid container className={styles.container}>
					<img
						className={styles.img}
						src="/vector-musical_1.svg"
						alt="Stay tuned to positive!"
					/>
					<div className={styles.enterButton}>
						<div className={styles.playIcon}>
							<IconButton
								data-testid="icon-button"
								size="medium"
								color="inherit"
								onClick={() => router.push('/tracks')}
							>
								<Play style={{ fontSize: '3rem' }} />
							</IconButton>
						</div>
					</div>
				</Grid>
			</CenterCard>
			<Grid container justifyContent="center">
				<Box className={styles.background}>
					<Box className={styles.mainText}>
						Here you can enjoy your favorite tracks without any ADs and other
						shit
					</Box>
				</Box>
			</Grid>
		</>
	);
};

export default Start;
