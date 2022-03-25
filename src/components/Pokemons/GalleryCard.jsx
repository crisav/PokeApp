import React from 'react'

const GalleryCard = ({image, name}) => {
  return (
    <div className='gallery-card'>
      <figure className='gallery-card__container'>
        <img className='gallery-card__container-image' src={image} alt={name} />
      </figure>
      <p className='gallery-card__name'>{name}</p>
    </div>
  )
}

export default GalleryCard