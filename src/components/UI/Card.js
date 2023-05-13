import React from 'react';
import './Card.css'

const Card = (props) => {
  const classes = 'card ' + props.className
  // children: reserved, content between opening and closing tag
  //? Wrapper (remove code duplication (css))
  return <div className={classes}>{props.children}</div>
}

export default Card;