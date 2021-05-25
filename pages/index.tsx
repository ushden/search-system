import Image from 'next/image';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { ProductName } from '../components/ProductName';
import { Footer } from '../components/Footer';
import { SearchForm } from '../components/SearchForm';

const MainPage: FC = () => {
	const router = useRouter();
	const [searchValue, setSearchValue] = useState('');

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault();

		router.push(`/result?term=${searchValue}`);
	};

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	return (
		<div className='h-[100vh] flex flex-col justify-between'>
			<main className='w-full flex p-2'>
				<section className='flex flex-col item-center w-full'>
					<div className='flex align-middle justify-center items-center flex-col my-4 mb-7'>
						<div className='mb-2 animate-wiggle'>
							<Image
								src='/static/images/eye.png'
								alt='Ushoogle'
								priority={true}
								width={220}
								height={220}
								objectFit='contain'
							/>
						</div>
						<ProductName className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest' />
					</div>
					<SearchForm
						value={searchValue}
						onSubmit={handleSubmitForm}
						onChange={handleChangeInput}
					/>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default MainPage;
