import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = { userName: ''}
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: Form Submit' ,this.state.userName)
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.props.onSubmit(res.data);
        this.setState({userName: ''})
      })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
        value={this.state.userName}
        onChange={(event) => this.setState({ userName: event.target.value})}
        placeholder="Github Username" />
        <button type="submit">Add Card</button>
      </form>
    );
  }
}

export default Form; 