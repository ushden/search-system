import { FC } from 'react';
import { ResultItemType } from '../pages/result';

type ResultImageProps = {
	item: ResultItemType;
};

export const ResultImageItem: FC<ResultImageProps> = ({ item }) => {
	return (
		<div className='max-w-full break-words shadow-md p-1 mb-3'>
			<a href={item.link} target='_blank'>
				<img src={item.link} alt={item.title} className='max-w-full' />
			</a>
		</div>
	);
};
