import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { ProductName } from './ProductName';

type PaginationProps = {
	onNextPage: () => void;
	onPreviesPage: () => void;
	startIndex: number;
};

export const Pagination: FC<PaginationProps> = ({
	onPreviesPage,
	onNextPage,
	startIndex,
}) => {
	return (
		<div className='flex items-center flex-col mb-2'>
			<div className='mb-1'>
				<Image
					src='/static/images/eye.png'
					alt='Ushooglo'
					width={50}
					height={50}
				/>
			</div>
			<div className='flex items-center'>
				<div>
					{startIndex === 11 ? null : (
						<FontAwesomeIcon
							icon={faArrowLeft}
							onClick={onPreviesPage}
							className='cursor-pointer text-lg text-blue-500'
						/>
					)}
				</div>

				<ProductName className='text-3xl ml-3 sm:text-4xl md:text-5xl' />
				<div>
					<FontAwesomeIcon
						icon={faArrowRight}
						onClick={onNextPage}
						className='cursor-pointer text-lg text-blue-500 ml-3'
					/>
				</div>
			</div>
		</div>
	);
};
