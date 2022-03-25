import React from 'react'

const GalleryCard = ({image, name}) => {
  return (
    <div className=''>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default GalleryCard