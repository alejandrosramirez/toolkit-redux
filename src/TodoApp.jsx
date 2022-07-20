import { useState } from "react";

import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
	const [todoId, setTodoId] = useState(1);
	// const { data: todos = [], isLoading } = useGetTodosQuery();
	const { data: todo, isLoading } = useGetTodoQuery(todoId);

	const prevTodo = () => {
		if (todoId === 1) {
			return;
		}
		setTodoId(todoId - 1);
	};

	const nextTodo = () => {
		setTodoId(todoId + 1);
	};

	return (
		<>
			<h1>Todo App - RTK Query</h1>
			<hr />

			<h4>Is loading: {isLoading ? "true" : "false"}</h4>

			<pre>{JSON.stringify(todo, null, 3)}</pre>

			<button onClick={prevTodo}>Prev Todo</button>
			<button onClick={nextTodo}>Next Todo</button>

			{/* <ul>
				{todos.map(({ id, completed, title }) => (
					<li key={id}>
						<strong>[{completed ? "DONE" : "PENDING"}]:</strong>{" "}
						{title}
					</li>
				))}
			</ul> */}
		</>
	);
};
