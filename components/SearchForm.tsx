import Image from 'next/image';
import { ChangeEvent, FC, FormEvent } from 'react';

type SearchInputProps = {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: FormEvent) => void;
};

export const SearchForm: FC<SearchInputProps> = ({
	value,
	onChange,
	onSubmit,
}) => {
	return (
		<form
			action='submit'
			onSubmit={onSubmit}
			className='flex items-center justify-center flex-col'>
			<div className='flex items-center w-full md:w-2/4 rounded-lg border pl-2 shadow-md mb-5 focus-within:shadow-lg hover:shadow-lg'>
				<Image
					src='/static/images/search.png'
					alt='search'
					width={20}
					height={20}
					objectFit='contain'
				/>
				<input
					type='text'
					placeholder='Что найти?'
					className='w-full p-2 focus:outline-none rounded-lg'
					value={value}
					onChange={onChange}
				/>
			</div>
			<button
				type='submit'
				disabled={!Boolean(value)}
				className='p-2 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-md focus:outline-none
            hover:opacity-90 transition'>
				{Boolean(value) ? 'Глаз саурона готов искать' : 'Введите запрос'}
			</button>
		</form>
	);
};
