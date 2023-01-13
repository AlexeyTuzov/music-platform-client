import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { wrapper } from '../store';
import { Provider } from 'react-redux';
import MainTheme from '../themes/MainTheme';
import { ThemeProvider } from '@material-ui/core';

/*
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
*/

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const { store, props } = wrapper.useWrappedStore(pageProps);

	return (
		<Provider store={store}>
			<ThemeProvider theme={MainTheme}>
				<Component {...props.pageProps} />
			</ThemeProvider>
		</Provider>
	);
};

export default wrapper.withRedux(App);
