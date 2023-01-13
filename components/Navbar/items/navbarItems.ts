import INavbarItem from '../../../interfaces/navbarItems.interface';
import FilterIcon from '@material-ui/icons/Filter';
import Main from '@material-ui/icons/Museum';
import Tracks from '@material-ui/icons/Subject';

const navbarItems: INavbarItem[] = [
	{
		text: 'Main page',
		href: '/',
		icon: Main
	},
	{
		text: 'Tracks list',
		href: '/tracks',
		icon: Tracks
	},
	{
		text: 'Albums list',
		href: '/albums',
		icon: FilterIcon
	}
];

export default navbarItems;
