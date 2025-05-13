import { useState, useEffect } from 'react';
import supabase from './utils/supabase-client';

function App() {
	const [todos, setTodos] = useState<any[]>([]);

	useEffect(() => {
		async function getTodos() {
			const { data: todos } = await supabase.from('todos').select();

			if (todos && todos.length > 1) {
				setTodos(todos);
			}
		}

		getTodos();
	}, []);

	return (
		<div>
			<h1>Todo List</h1>
			<ol>
				{todos.map(todo => (
					<li key={todo}>{todo}</li>
				))}
			</ol>
		</div>
	);
}
export default App;
