import React from 'react'

function PhotoListItem({photo}) {
  return (
    <div style={ {margin:'20px' }}>
      <img src={photo.url} alt="" />
    </div>
  )
}

export default PhotoListItem