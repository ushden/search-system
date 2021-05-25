import { useRouter } from 'next/router';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const HeaderSearchForm: FC = () => {
	const router = useRouter();
	const [value, setValue] = useState(router.query.term);

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault();

		if (value === '') {
			return router.push('/');
		}

		router.push(`/result?term=${value}`);
	};

	return (
		<form className='flex items-center justify-center flex-col mb-2'>
			<div className='flex items-center w-full sm:w-4/5 lg:w-3/6 rounded-lg border pl-2 shadow-md focus-within:shadow-lg hover:shadow-lg'>
				<input
					type='text'
					placeholder='Что найти?'
					className='w-full p-2 focus:outline-none rounded-lg'
					value={value}
					onChange={handleChangeInput}
				/>
				<button
					type='submit'
					className='focus:outline-none p-2'
					onClick={handleSubmitForm}>
					<FontAwesomeIcon
						icon={faSearch}
						className='hover:scale-50 text-blue-500 text-lg'
					/>
				</button>
			</div>
		</form>
	);
};
