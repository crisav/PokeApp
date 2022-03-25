import axios from "axios";
import Swal from 'sweetalert2';

import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=150'

export const getPokemons = () => {
  return (dispatch) => {

    dispatch( startLoading() );

    axios
      .get(URL)
      .then((response) => response.data)
      .then(data => {
        const pokemonList = data.results
        return Promise.all(pokemonList.map(pokemon => axios.get(pokemon.url)))
      })
      .then( pokemonData => {
        dispatch({
          type: types.getPokemons,
          payload: pokemonData
        })
        dispatch( finishLoading() )
      })
      .catch( e => {
        console.log(e);
        dispatch( finishLoading() );
        Swal.fire('Error', e.message, 'error');
      })
  }
}