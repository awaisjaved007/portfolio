import React, { Component } from "react";
import Header from './Header';

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{margin:20}}> {setup} <em>{punchline}</em> </p>
);

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch("http://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ joke: json });
      });
  }

  fetchJokes = () => {
    fetch("http://official-joke-api.appspot.com/random_ten")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ jokes: json });
      });
  };

  render() {
   
    return (
      <div>
      
        <h2>Highlighted Joke</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <p>Want 10 more jokes</p>
        <button onClick={this.fetchJokes}>Click me!</button>
        {
            this.state.jokes.map(joke => ( <Joke key={joke.id} joke={joke} /> ))
        }

      </div>
    
    );
  }
}

export default Jokes;
