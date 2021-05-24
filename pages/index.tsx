import Image from 'next/image';
import { FormEvent } from 'react';

const MainPage = () => {
	const onSubmitForm = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<main className='w-full h-[100vh] flex p-2'>
			<section className='flex flex-col item-center w-full'>
				<div className='flex align-middle justify-center items-center flex-col my-4 mb-7'>
					<div className='mb-2'>
						<Image
							src='/static/images/eye.png'
							alt='Ushoogle'
							priority={true}
							width={220}
							height={220}
							objectFit='contain'
						/>
					</div>
					<h1 className='text-4xl md:text-6xl font-bold tracking-widest'>
						<span className='text-blue-500'>USH</span>
						<span className='text-red-500'>O|O</span>
						<span className='text-green-500'>GLO</span>
					</h1>
				</div>
				<form
					action='submit'
					onSubmit={onSubmitForm}
					className='flex items-center justify-center flex-col'>
					<div className='flex w-full md:w-5/6 rounded-lg border shadow-md mb-5 focus-within:shadow-lg hover:shadow-lg'>
						<Image
							src='/static/images/search.png'
							alt='search'
							width={15}
							height={15}
							objectFit='contain'
						/>
						<input
							type='text'
							placeholder='Что найти?'
							className='w-full p-2 focus:outline-none rounded-lg'
						/>
					</div>
					<button
						type='submit'
						className='p-2 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-md focus:outline-none
            hover:opacity-90 transition'>
						Глаз саурона готов искать
					</button>
				</form>
			</section>
		</main>
	);
};

export default MainPage;
