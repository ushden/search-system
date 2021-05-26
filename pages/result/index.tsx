import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { ResultImageItem } from '../../components/ResultImageItem';
import { ResultItem } from '../../components/ResultItem';
import { ResultsNumber } from '../../components/ResultsNumber';
import { SoldItem } from '../../components/SoldItem';

export type ResultItemType = {
	link: string;
	snippet: string;
	title: string;
	formattedUrl: string;
};

type SearchInformation = {
	formattedSearchTime: string;
	formattedTotalResults: string;
};

type SearchErroreType = {
	code: number;
	message: string;
};
interface ResultPageProps {
	result: {
		items: Array<ResultItemType>;
		searchInformation: SearchInformation;
		error?: SearchErroreType;
	};
}

const ResultPage: FC<ResultPageProps> = ({ result }) => {
	console.log(result);
	const router = useRouter();
	const [startIndex, setStartIndex] = useState(11);
	const [value, setValue] = useState(router.query.term as string);

	if (result.error?.code) {
		return (
			<div className='h-[100vh] flex justify-center items-center text-center'>
				<p>Лимит на поиск исчерпан, приходите завтра</p>
			</div>
		);
	}

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleSearchQuery = (e: FormEvent) => {
		e.preventDefault();

		if (value === '') {
			return router.push('/');
		}

		router.push(`/result?term=${value}&start=1`);
	};

	const handleNextPage = () => {
		setStartIndex((i) => i + 10);

		router.push(
			`/result?term=${value}&start=${startIndex}${
				router.query.type ? '&type=image' : ''
			}`
		);
	};

	const handlePreviesPage = () => {
		setStartIndex((i) => i - 10);
		console.log(startIndex);
		router.push(
			`/result?term=${value}&start=${startIndex}${
				router.query.type ? '&type=image' : ''
			}`
		);
	};

	const handleImageSearchClick = () => {
		setStartIndex(11);
		router.push(`/result?term=${value}&start=1&type=image`);
	};

	return (
		<>
			<Head>
				<title>Ushooglo - {router.query.term}</title>
			</Head>
			<header>
				<Header
					value={value}
					onChange={handleChangeInput}
					onClick={handleSearchQuery}
				/>
			</header>
			<main className='p-1'>
				<div className='flex items-center justify-center'>
					<button
						onClick={handleSearchQuery}
						className='p-1 border-green-500 border focus:outline-none focus:opacity-80 hover:opacity-80'>
						Веб поиск
					</button>
					<button
						onClick={handleImageSearchClick}
						className=' ml-2 p-1 border-green-500 border focus:outline-none focus:opacity-80 hover:opacity-80'>
						Картинки
					</button>
				</div>
				<ResultsNumber
					resultNumber={result.searchInformation.formattedTotalResults}
					time={result.searchInformation.formattedSearchTime}
				/>
				{router.query.type ? (
					<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
						{result.items.map((item, i) => (
							<ResultImageItem item={item} key={item.title + i} />
						))}
					</section>
				) : (
					<section className='flex flex-col justify-center items-center w-full'>
						<SoldItem />
						{result.items.map((item, i) => (
							<ResultItem key={item.title + i} item={item} />
						))}
					</section>
				)}
			</main>
			<Pagination
				startIndex={startIndex}
				onNextPage={handleNextPage}
				onPreviesPage={handlePreviesPage}
			/>
			<Footer />
		</>
	);
};

export default ResultPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const url = encodeURI(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
			process.env.CX_CODE
		}&q=${ctx.query.term}&lr=lang_ru&start=${ctx.query.start || 1}${
			ctx.query.type ? '&searchType=image' : ''
		}`
	);

	const res = await fetch(url);
	const data = await res.json();

	return {
		props: {
			result: data,
		},
	};
};
