import React from 'react'
import "./TopText.css"

const TopText = (props) => {
  return (
        <h1 className="top-text">{props.topText}</h1>

  )
}

export default TopText