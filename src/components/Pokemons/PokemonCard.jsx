import { useSelector } from 'react-redux'

const PokemonCard = () => {
  const { activePokemon } = useSelector(state => state.pokemons)

  let content = (
    <div className='pokemon-card'>
      <figure className='pokemon-card__image'>
        <img src='https://cdn.pixabay.com/photo/2016/08/06/08/05/pokemon-1574006_960_720.png' alt='Default Image' />
      </figure>
      <div className='pokemon-card__details'>
        <h3 className='pokemon-card__details-name'>selecciona un pokémon</h3>
      </div>
    </div>
  )

  if(activePokemon) {
    content = (
      <div className='pokemon-card'>
        <figure className='pokemon-card__image'>
          <img src={activePokemon.sprites.front_default} alt={activePokemon.name} />
        </figure>
        <div className='pokemon-card__details'>
          <h3 className='pokemon-card__details-name'>{activePokemon.name}</h3>
          <p className='pokemon-card__details-characteristic'>
            <span>Tipo: </span>
            <span>{activePokemon.types[0].type.name}</span>
          </p>
          <div>
            <p className='pokemon-card__details-characteristic'>habilidades:</p>
            <ul className='pokemon-card__details-list'>
              {
                activePokemon.abilities.map((ability, index) => (
                  <li
                    key={index}
                    className='pokemon-card__details-list-item'
                  >
                    {ability.ability.name}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    content
  )
}

export default PokemonCard