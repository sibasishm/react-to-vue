export function Tabs() {
	return (
		<div className='tabs tabs-box w-full mt-8 grid grid-cols-3 bg-base-300/40'>
			<input type='radio' name='tasks_tab' className='tab' aria-label='Today' />
			<input
				type='radio'
				name='tasks_tab'
				className='tab'
				aria-label='Upcoming'
				defaultChecked
			/>
			<input
				type='radio'
				name='tasks_tab'
				className='tab'
				aria-label='Missed'
			/>
		</div>
	);
}
