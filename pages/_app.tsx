import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { wrapper } from '../store';
import { Provider } from 'react-redux';

/*
export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
*/

const App: FC<AppProps> = ({Component, pageProps}) => {

    const {store, props} = wrapper.useWrappedStore(pageProps);

    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    )
}

export default wrapper.withRedux(App);
