import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Menu from "./components/Menu"
import { getPokemons } from "./actions/pokemons"

import './assets/styles/styles.scss'
import Spinner from "./components/UI/Spinner"
import Pokemons from "./components/Pokemons"

const App = () => {

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)

  useEffect(() => {

      dispatch( getPokemons() );

  }, [dispatch])

  return (
    <div>
      {
        loading
          ? <Spinner />
          : (
              <>
                <Menu />
                <Pokemons/>
              </>
            )
      }
    </div>
  )
}

export default App
