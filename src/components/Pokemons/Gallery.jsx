import { useSelector } from 'react-redux'
import GalleryCard from './GalleryCard'

const Gallery = () => {
  const { pokemons } = useSelector(state => state.pokemons)

  return (
    <div className='gallery'>
      {
        pokemons.map(pokemon => (
          <GalleryCard
            key={pokemon.data.id}
            image={pokemon.data.sprites.front_default}
            name={pokemon.data.name}
            pokemon={pokemon.data}
          />
        ))
      }
    </div>
  )
}

export default Gallery