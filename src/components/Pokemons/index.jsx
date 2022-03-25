import { useSelector } from "react-redux"
import Gallery from "./Gallery"
import Table from "./Table"

const Pokemons = () => {
  const { pokemons, viewGallery } = useSelector(state => state.pokemons)

  console.log(viewGallery)

  return (
    <div>
      {
        viewGallery
          ? ( <>
                <h2>haz clic la carta para ver mas detalles del pokemon</h2>
                <Gallery />
              </>)
          : ( <>
                <h2>haz clic en el nombre del pokemon para ver mas detalles</h2>
                <Table />
              </>)
      }
    </div>
  )
}

export default Pokemons