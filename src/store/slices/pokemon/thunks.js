import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemon, startLoadingPokemon } from "./pokemonSlice";

export const getPokemon = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoadingPokemon());

		const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

		dispatch(setPokemon({ pokemon: data.results, page: page + 1 }));
	};
};
