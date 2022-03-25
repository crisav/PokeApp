import { useSelector } from "react-redux";
import Gallery from "./Gallery";
import Table from "./Table";

const Pokemons = () => {
  const { pokemons } = useSelector(state => state.pokemons);

  return (
    <div>
      <h1>Pokemones</h1>
      <Gallery />
      {/* <Table /> */}
      {/* {
        pokemons.map( pokemon => (
          <h2 key={pokemon.data.id}>{`#${pokemon.data.id} = ${pokemon.data.name}`}</h2>
        ))
      } */}
    </div>
  )
}

export default Pokemons