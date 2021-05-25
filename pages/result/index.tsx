import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Header } from '../../components/Header';
import { ResultItem } from '../../components/ResultItem';
import { ResultsNumber } from '../../components/ResultsNumber';
import { SoldItem } from '../../components/SoldItem';

const ResultPage: FC = ({ result }: any) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Ushooglo - {router.query.term}</title>
			</Head>
			<header>
				<Header />
			</header>
			<main className='p-1'>
				<ResultsNumber
					resultNumber={result.searchInformation.formattedTotalResults}
					time={result.searchInformation.formattedSearchTime}
				/>
				<section className='flex flex-col justify-center items-center w-full'>
					<SoldItem />
					{result.items.map((item: any) => (
						<ResultItem
							key={item.title}
							link={item.link}
							title={item.title}
							desc={item.snippet}
							formattedUrl={item.formattedUrl}
						/>
					))}
				</section>
				<p className='text-center text-gray-500'>Пока хорошо :)</p>
			</main>
		</>
	);
};

export default ResultPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const url = encodeURI(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX_CODE}&q=${ctx.query.term}&lr=lang_ru`
	);

	console.log(url);
	const res = await fetch(url);
	const data = await res.json();

	return {
		props: {
			result: data,
		},
	};
};
