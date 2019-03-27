import React from 'react'


const styleImage = {
    width: '45vw',
    height: '60vh'
}
const Image = (props) => {
  return (

        <img style={styleImage} src={props.imageURL} alt=""/>

  )
}

export default Image


