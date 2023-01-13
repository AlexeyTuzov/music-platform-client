import {
	AppBar,
	Avatar,
	CssBaseline,
	Divider,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Toolbar,
	Typography
} from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import navbarItems from './items/navbarItems';
import { useRouter } from 'next/router';
import styles from './styles/Navbar.module.scss';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const handleDrawerOpen = () => {
		console.log('open');
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<>
			<div>
				<CssBaseline />
				<AppBar position="fixed">
					<Toolbar className={styles.toolbar}>
						<div className={styles.button}>
							<IconButton
								size="medium"
								color="inherit"
								onClick={handleDrawerOpen}
							>
								<MenuIcon />
							</IconButton>
						</div>
						<div>
							<Typography variant="h5">Sounds the way You like!</Typography>
						</div>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="persistent"
					open={open}
					anchor="left"
					PaperProps={{ style: { minWidth: '20%' } }}
				>
					<div>
						<IconButton size="medium" onClick={handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<List>
						{navbarItems.map(({ text, href, icon }, index) => (
							<>
								{index > 0 ? <Divider variant="inset" /> : null}
								<ListItem button key={href} onClick={() => router.push(href)}>
									<ListItemAvatar>
										<Avatar>{React.createElement(icon)}</Avatar>
									</ListItemAvatar>
									<ListItemText>{text}</ListItemText>
								</ListItem>
							</>
						))}
					</List>
				</Drawer>
			</div>
		</>
	);
};

export default Navbar;
