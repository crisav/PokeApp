import React from 'react'
import MenuItem from './MenuItem'

const arry = Array(3).fill('MenuItem')

const Menu = () => {
  return (
    <header>
      <nav className='menu'>
        <img className='menu__logo' src="https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_960_720.png" alt="Logo" />
        <ul className='menu__navbar'>
          {
            arry.map((item, index) => (
              <MenuItem key={index}>
                {item}
              </MenuItem>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Menu