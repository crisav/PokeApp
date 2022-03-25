import { types } from '../types/types'

const initialState = {
  pokemons: [],
  viewGallery: true,
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
        activePokemon: action.payload
      }

    case types.viewGallery:
      return {
        ...state,
        viewGallery: action.payload
      }

    default:
      return state
  }
}