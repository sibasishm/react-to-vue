import dayjs from 'dayjs';
import { Stats } from './components/stats';
import { Tabs } from './components/tabs';
import { TaskList } from './components/task-list';

function App() {
	return (
		<main className='min-h-screen bg-base-200'>
			<div className='conatiner mx-auto max-w-lg py-6 px-4'>
				<hgroup className='flex justify-between items-baseline mb-4'>
					<h2 className='text-2xl font-bold'>Hi, User!</h2>
					<p className='text-gray-600 text-sm'>
						{dayjs(new Date()).format('dddd, MMM D')}
					</p>
				</hgroup>
				<Stats />
				<button className='btn btn-primary w-full mt-6'>+ Add new habit</button>
				<Tabs />
				<TaskList />
			</div>
		</main>
	);
}
export default App;
