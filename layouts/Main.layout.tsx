import { FC, ReactNode } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Container } from '@material-ui/core';
import Player from '../components/Player/Player';

interface NavbarProps {
	children: NonNullable<ReactNode>;
}
const MainLayout: FC<NavbarProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			<Container
				style={{
					marginTop: '150px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				{children}
			</Container>
			<Player active={true} />
		</>
	);
};

export default MainLayout;
