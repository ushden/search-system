import { useRouter } from 'next/router';
import { FC } from 'react';

type ProductNameProps = {
	className?: string;
};

export const ProductName: FC<ProductNameProps> = ({ className }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push('/');
	};

	return (
		<h1 className={className} onClick={handleClick}>
			<span className='text-blue-500'>USH</span>
			<span className='text-red-500'>O|O</span>
			<span className='text-green-500'>GLO</span>
		</h1>
	);
};
