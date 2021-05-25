import Image from 'next/image';
import { HeaderSearchForm } from './HeaderSearchForm';
import { ProductName } from './ProductName';

export const Header = () => {
	return (
		<div className='shadow-md p-1 py-2'>
			<div className='flex items-center flex-row justify-center mb-3'>
				<Image
					src='/../public/static/images/eye.png'
					alt='USOOGLO'
					width={50}
					height={50}
				/>
				<ProductName className='text-4xl ml-2 cursor-pointer' />
			</div>
			<HeaderSearchForm />
		</div>
	);
};
