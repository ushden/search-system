import { FC } from 'react';
import { ResultItemType } from '../pages/result';

type ResultItemProps = {
	item: ResultItemType;
};

export const ResultItem: FC<ResultItemProps> = ({ item }) => {
	return (
		<div className='max-w-full break-words shadow-md p-1 mb-3 sm:w-4/5 lg:w-3/6'>
			<div className='flex items-center'>
				<h2 className='text-green-500 text-xl'>
					<a href={item.link} target='_blank'>
						{item.title}
					</a>
				</h2>
			</div>
			<span className='line-clamp-1 text-gray-400 mb-1'>
				<a href={item.link} target='_blank'>
					{item.formattedUrl}
				</a>
			</span>
			<p className='line-clamp-4'>{item.snippet}</p>
		</div>
	);
};
