import { ChangeEvent, FC, FormEvent, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type SearchFormProps = {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onClick: (e: FormEvent) => void;
};

export const HeaderSearchForm: FC<SearchFormProps> = memo(
	({ value, onChange, onClick }) => {
		return (
			<form className='flex items-center justify-center flex-col mb-2'>
				<div className='flex items-center w-full sm:w-4/5 lg:w-3/6 rounded-lg border pl-2 shadow-md focus-within:shadow-lg hover:shadow-lg'>
					<input
						type='text'
						placeholder='Что найти?'
						className='w-full p-2 focus:outline-none rounded-lg'
						value={value}
						onChange={onChange}
					/>
					<button
						type='submit'
						className='focus:outline-none p-2'
						onClick={onClick}>
						<FontAwesomeIcon
							icon={faSearch}
							className='hover:scale-50 text-blue-500 text-lg'
						/>
					</button>
				</div>
			</form>
		);
	}
);
