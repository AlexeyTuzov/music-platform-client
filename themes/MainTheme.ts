import { createTheme } from '@material-ui/core';
import { blueGrey, indigo, lime } from '@material-ui/core/colors';

const MainTheme = createTheme({
	palette: {
		primary: {
			main: indigo[700]
		},
		secondary: {
			main: lime[300]
		},
		background: {
			paper: indigo[50]
		}
	},
	overrides: {
		MuiAvatar: {
			colorDefault: {
				color: '#333',
				backgroundColor: lime[300]
			}
		},
		MuiTextField: {
			root: {
				maxHeight: 300,
				overflowY: 'auto'
			}
		}
	}
});

export default MainTheme;
