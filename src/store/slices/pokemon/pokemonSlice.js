import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState: {
		page: 0,
		pokemon: [],
		isLoading: false,
	},
	reducers: {
		setPokemon: (state, action) => {
			state.isLoading = false;
			state.page = action.payload.page;
			state.pokemon = action.payload.pokemon;
		},
		startLoadingPokemon: (state) => {
			state.isLoading = true;
		},
	},
});

export const { setPokemon, startLoadingPokemon } = pokemonSlice.actions;
