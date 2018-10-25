import React from 'react';
import Card from './Card';

const CardList = (props) => {
  return (
    <div>
      {/* Turned the "cards" data from App.js into the invidual "card" */}
    {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  )
}

export default CardList;

// This creates the list by using Card component