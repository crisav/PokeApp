import { useEffect, useState } from "react"
import Menu from "./components/Menu"

import './assets/styles/styles.scss'
import axios from "axios"

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=150'
// const URL = 'https://pokeapi.co/api/v2/pokemon/1/'

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios
    .get(URL)
    .then((response) => response.data)
    .then(data => {
      const pokemonList = data.results
      return Promise.all(pokemonList.map(pokemon => axios.get(pokemon.url)))
    })
    .then( pokemonData => setData(pokemonData) )
    .catch((error) => console.log(error));

  }, [])

  console.log('esta es la data: ', data)

  return (
    <div>
      <Menu />
    </div>
  )
}

export default App
