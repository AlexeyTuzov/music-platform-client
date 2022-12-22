import {
	AppBar,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	Typography
} from '@material-ui/core';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import navbarItems from './items/navbarItems';
import { useRouter } from 'next/router';

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
					<Toolbar>
						<IconButton
							size="medium"
							color="inherit"
							onClick={handleDrawerOpen}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h5">Persistent drawer</Typography>
					</Toolbar>
				</AppBar>
				<Drawer variant="persistent" open={open} anchor="left">
                    <div>
                        <IconButton
                            size='medium'
                            color='inherit'
                            onClick={handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        {navbarItems.map(({text, href}) => (
                            <ListItem button key={href} onClick={() => router.push(href)}>
                                <ListItemText>
                                    {text}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
			</div>
		</>
	);
};

export default Navbar;
