import { FC } from 'react';

type ResultItemProps = {
	link: string;
	title: string;
	desc: string;
	formattedUrl: string;
};

export const ResultItem: FC<ResultItemProps> = ({
	link,
	title,
	desc,
	formattedUrl,
}) => {
	return (
		<div className='max-w-full break-words shadow-md p-1 mb-2 sm:w-4/5 lg:w-3/6'>
			<div>
				<h2 className='text-green-500 text-xl'>
					<a href={link} target='_blank'>
						{title}
					</a>
				</h2>
				<span className='line-clamp-1 text-gray-400 mb-1'>
					<a href={link} target='_blank'>
						{formattedUrl}
					</a>
				</span>
				<p className='line-clamp-4'>{desc}</p>
			</div>
			<div></div>
		</div>
	);
};
