import React from 'react'

const Imagecard = ({img}) => {
  return (
    <div>
      <img src={img.url} alt="" />
      <p> {img.name}</p>
      
        

    </div>
  )
}

export default Imagecard