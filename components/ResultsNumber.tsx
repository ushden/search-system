import { FC } from 'react';

type ResultsNumberProps = {
	resultNumber: string;
	time: string;
};

export const ResultsNumber: FC<ResultsNumberProps> = ({
	resultNumber,
	time,
}) => {
	return (
		<div className='text-sm text-center p-2'>
			<p className='text-gray-500'>
				Глаз Саурона нашел для вас -{' '}
				<span className='text-blue-500'>{resultNumber}</span> результатов за{' '}
				<span className='text-green-500'>{time}</span> сек.
			</p>
		</div>
	);
};
