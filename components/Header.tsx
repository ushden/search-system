import Image from 'next/image';
import { ChangeEvent, FC, FormEvent, memo } from 'react';
import { HeaderSearchForm } from './HeaderSearchForm';
import { ProductName } from './ProductName';

type HeaderProps = {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onClick: (e: FormEvent) => void;
};

export const Header: FC<HeaderProps> = memo(({ value, onClick, onChange }) => {
	return (
		<div className='shadow-md p-1 py-2'>
			<div className='flex items-center flex-row justify-center mb-3'>
				<Image
					src='/static/images/eye.png'
					alt='USOOGLO'
					width={50}
					height={50}
				/>
				<ProductName className='text-4xl ml-2 cursor-pointer' />
			</div>
			<HeaderSearchForm value={value} onChange={onChange} onClick={onClick} />
		</div>
	);
});
