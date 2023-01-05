import { FC, ReactNode } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '@material-ui/core';
import Player from '../../components/Player/Player';
import Head from 'next/head';
import Background from '../../components/Background/Background';

interface NavbarProps {
	children: NonNullable<ReactNode>;
	title?: string;
	description?: string;
}
const MainLayout: FC<NavbarProps> = (props) => {
	return (
		<>
			<Head>
				<title>{props.title || 'Musical platform'}</title>
				<meta
					name="description"
					content={`Musical platform - you can upload your tracks here - ${props.description}`}
				/>
				<meta name="robots" content={'index, follow'} />
				<meta
					name="viewport"
					content={'width=device-width height=device-height initial-scale=1'}
				/>
			</Head>
			<Navbar />
            <Background />
			<Container
				style={{
					paddingTop: '150px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				{props.children}
			</Container>
			<Player />
		</>
	);
};

export default MainLayout;
