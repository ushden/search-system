import { FC } from 'react';
import { ResultItemType } from '../pages/result';

type ResultImageProps = {
	item: ResultItemType;
};

export const ResultImageItem: FC<ResultImageProps> = ({ item }) => {
	return (
		<div className='max-w-full break-words shadow-md p-1 mb-5'>
			<div className='mb-1'>
				<a href={item.link} target='_blank'>
					<img
						src={item.link}
						alt={item.title}
						className='w-full h-full max-w-full object-cover'
					/>
				</a>
			</div>
			<div>
				<p className='line-clamp-1 text-green-500 text-lg'>
					<a href={item.image?.contextLink} target='_blank'>
						{item.title}
					</a>
				</p>
				<a href={item.image?.contextLink} target='_blank'>
					<span className='text-gray-500'>{item.displayLink}</span>
				</a>
			</div>
		</div>
	);
};
