export const SoldItem = () => {
	return (
		<div className='max-w-full break-words shadow-md p-1 mb-2 sm:w-4/5 lg:w-3/6'>
			<div>
				<div className='flex items-center'>
					<h2 className='text-green-500 text-xl'>
						<a href='https://social-pwa-afa9f.web.app/' target='_blank'>
							CLUB 48
						</a>
					</h2>
					<p className='ml-3 bg-red-500 text-white rounded-md px-2'>Реклама</p>
				</div>
				<span className='line-clamp-1 text-gray-400 mb-1'>
					<a href='https://social-pwa-afa9f.web.app/' target='_blank'>
						https://social-pwa-afa9f.web.app
					</a>
				</span>
				<p className='line-clamp-4'>
					Самая лучшая соц. сеть с прекрасными людьми. Общение и отдых, Вас ждет
					в нашем приложении
				</p>
			</div>
			<div></div>
		</div>
	);
};
