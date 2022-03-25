import { useDispatch } from 'react-redux'
import { setActivePokemon } from '../../actions/pokemons'

const GalleryCard = ({image, name, pokemon}) => {
  const dispatch = useDispatch()

  const handleActivePokemon = (pokemon) => {
    dispatch( setActivePokemon(pokemon) )
  }

  return (
    <div
      className='gallery-card'
      onClick={() => handleActivePokemon(pokemon)}
    >
      <figure className='gallery-card__container'>
        <img className='gallery-card__container-image' src={image} alt={name} />
      </figure>
      <p className='gallery-card__name'>{name}</p>
    </div>
  )
}

export default GalleryCard