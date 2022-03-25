import { useSelector } from 'react-redux'
import Gallery from './Gallery'
import PokemonCard from './PokemonCard'
import Table from './Table'

const Pokemons = () => {
  const { viewGallery } = useSelector(state => state.pokemons)

  return (
    <div className="pokemons">
      {
        viewGallery
          ? ( <>
                <h2 className="pokemons__title">haz clic en una carta para ver mas detalles del pokemon</h2>
                <div className="pokemons__container">
                  <Gallery />
                  <PokemonCard />
                </div>
              </>)
          : ( <>
                <h2 className="pokemons__title">haz clic en el nombre del pokemon para ver mas detalles</h2>
                <div className="pokemons__container">
                  <Table />
                  <PokemonCard />
                </div>
              </>)
      }
    </div>
  )
}

export default Pokemons