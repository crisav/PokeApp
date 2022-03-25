import { useDispatch } from 'react-redux'
import { setViewPokemons } from '../../actions/pokemons'

const Menu = () => {
  const dispatch = useDispatch();

  const handleViewPokemons = (view) => {
    dispatch( setViewPokemons(view) )
  }

  return (
    <header>
      <nav className='menu'>
        <img className='menu__logo' src='https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_960_720.png' alt='Logo' />
        <ul className='menu__navbar'>
          <p
            className='menu__navbar-item'
            onClick={() => handleViewPokemons(true)}
          >
            Galeria
          </p>
          <p
            className='menu__navbar-item'
            onClick={() => handleViewPokemons(false)}
          >
            Tabla
          </p>
        </ul>
      </nav>
    </header>
  )
}

export default Menu