import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Menu from "./components/Menu"
import { getPokemons } from "./actions/pokemons"

import './assets/styles/styles.scss'

// const URL = 'https://pokeapi.co/api/v2/pokemon?limit=150'
// // const URL = 'https://pokeapi.co/api/v2/pokemon/1/'

const App = () => {

  const dispatch = useDispatch();
  const { pokemons } = useSelector(state => state.pokemons);

  useEffect(() => {

      dispatch( getPokemons() );

  }, [dispatch])

  console.log(pokemons)

  return (
    <div>
      <Menu />
    </div>
  )
}

export default App
