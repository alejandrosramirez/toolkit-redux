import { useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
	const { data: todos = [], isLoading } = useGetTodosQuery();

	return (
		<>
			<h1>Todo App - RTK Query</h1>
			<hr />

			<h4>Is loading: {isLoading ? "true" : "false"}</h4>

			<pre>...</pre>

			<ul>
				{todos.map(({ id, completed, title }) => (
					<li key={id}>
						<strong>[{completed ? "DONE" : "PENDING"}]:</strong>{" "}
						{title}
					</li>
				))}
			</ul>

			<button>Next Todo</button>
		</>
	);
};
