import React from 'react';
import  '../styles/Card.css';

const Card = (props) => {
  return (
    <div className="card-space">
      <img src={props.avatar_url} alt="something"/>
     <div className="info">
        <div className="name">{props.name}</div>
        <div>{props.company}</div>
     </div>
    </div>
  )
}

export default Card