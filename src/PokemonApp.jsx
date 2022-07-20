import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "./store/slices/pokemon";

export const PokemonApp = () => {
	const { page, pokemon, isLoading } = useSelector((state) => state.pokemon);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemon());
	}, []);

	return (
		<>
			<h1>Pokemon App</h1>
			<hr />

			<span>Loading: {isLoading ? "True" : "False"}</span>

			<ul>
				{pokemon.map(({ name }) => (
					<li key={name}>{name}</li>
				))}
			</ul>

			<button
				disabled={isLoading}
				onClick={() => dispatch(getPokemon(page))}
			>
				Next
			</button>
		</>
	);
};
