import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import '../styles/globals.css';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='icon' href='/favicon.ico' />
				<title>Ushoogle - best search system ever!</title>
			</Head>
			<Component {...pageProps}>
				<NextNprogress
					color='#29D'
					startPosition={0.3}
					stopDelayMs={200}
					height={3}
				/>
			</Component>
		</>
	);
}

export default MyApp;
