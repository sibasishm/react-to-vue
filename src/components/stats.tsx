export function Stats() {
	return (
		<div className='stats stats-vertical md:stats-horizontal shadow w-full bg-base-100'>
			<div className='stat'>
				<div className='stat-figure text-secondary'>
					<div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/20'>
						🔥
					</div>
				</div>
				<div className='stat-title'>Current Streak</div>
				<div className='stat-value'>3 days</div>
			</div>
			<div className='stat'>
				<div className='stat-figure text-secondary'>
					<div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/20'>
						✨
					</div>
				</div>
				<div className='stat-title'>Total Points</div>
				<div className='stat-value'>1,200</div>
			</div>
		</div>
	);
}
