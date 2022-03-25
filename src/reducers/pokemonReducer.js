import { types } from "../types/types";

const initialState = {
  pokemons: [],
  activePokemon: null
}

export const pokemonReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.getPokemons:
      return {
        ...state,
        pokemons: action.payload
      }

    case types.pokemonSetActive:
      return {
        ...state,
        activeEvent: action.payload
      }

    default:
      return state
  }
}