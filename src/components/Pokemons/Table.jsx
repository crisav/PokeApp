import { useDispatch, useSelector } from 'react-redux'
import { setActivePokemon } from '../../actions/pokemons'

const HEADERS_TABLE = ['Indice', 'Nombre', 'Altura', 'Peso']

const Table = () => {
  const dispatch = useDispatch();
  const { pokemons } = useSelector(state => state.pokemons);

  const handleActivePokemon = (pokemon) => {
    dispatch( setActivePokemon(pokemon) )
  }

  console.log(pokemons)

  return (
    <table className='table'>
      <thead className='table__head'>
        <tr>
          {
            HEADERS_TABLE.map((item, index) => (
              <th key={index} className='table__head-row'>{item}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          pokemons.map(pokemon => (
            <tr key={pokemon.data.id} className='table__body'>
              <td className='table__body-row'>{pokemon.data.id}</td>
              <td
                className='table__body-row pointer'
                onClick={() => handleActivePokemon(pokemon.data)}
              >
                {pokemon.data.name}
              </td>
              <td className='table__body-row'>{pokemon.data.height} ft</td>
              <td className='table__body-row'>{pokemon.data.weight} kg</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table