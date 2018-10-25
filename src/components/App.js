import React, { Component } from 'react';
import  '../styles/App.css';
import Form from '../components/Form'
import CardList from './CardList';

class App extends Component {
  state = {
    cards: []}

    addNewCard = (cardInfo) => {
      this.setState(prevState => ({
       cards: prevState.cards.concat(cardInfo) 
      }))
    }

  render() {
    return (
   <div>
        <Form onSubmit={this.addNewCard} />
       {/* I used "cards={data}" to have access to the data in my CardList component and I called it with "cards" then mapped over it in the CardList component */}
       <CardList cards={this.state.cards} />
   </div>
    );
  }
}

export default App;
