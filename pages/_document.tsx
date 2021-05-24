import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet='utf-8' />
					<meta
						name='viewport'
						content='initial-scale=1.0, width=device-width'
					/>
					<meta
						name='description'
						content='This is super pyper search system :)'
					/>
					<link
						rel='apple-touch-icon'
						sizes='57x57'
						href='static/image/apple-icon-57x57.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='60x60'
						href='static/image/apple-icon-60x60.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='72x72'
						href='static/image/apple-icon-72x72.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='76x76'
						href='static/image/apple-icon-76x76.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='114x114'
						href='static/image/apple-icon-114x114.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='120x120'
						href='static/image/apple-icon-120x120.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='144x144'
						href='static/image/apple-icon-144x144.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='152x152'
						href='static/image/apple-icon-152x152.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='static/image/apple-icon-180x180.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='192x192'
						href='static/image/android-icon-192x192.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='static/image/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='96x96'
						href='static/image/favicon-96x96.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='static/image/favicon-16x16.png'
					/>
					<link rel='manifest' href='manifest.json' />
					<meta name='msapplication-TileColor' content='#ffffff' />
					<meta
						name='msapplication-TileImage'
						content='static/image/ms-icon-144x144.png'
					/>
					<meta name='theme-color' content='#ffffff' />
					<title>Ushoogle - best search system ever!</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
