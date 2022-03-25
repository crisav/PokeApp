import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Menu from "./components/Menu"
import { getPokemons } from "./actions/pokemons"

import './assets/styles/styles.scss'
import Spinner from "./components/UI/Spinner"

const App = () => {

  const dispatch = useDispatch();
  const { pokemons } = useSelector(state => state.pokemons);
  const { loading } = useSelector(state => state.ui);

  useEffect(() => {

      dispatch( getPokemons() );

  }, [dispatch])

  console.log(pokemons)

  return (
    <div>
      {
        loading
          ? <Spinner />
          : <Menu />
      }
    </div>
  )
}

export default App
