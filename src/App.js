import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'cirrus-ui';
import CardList from './components/card-list/card-list.component.jsx';

// pull in all of your friends from facebook
// enable filters that do not exist in facebook
// enable filtering by friends in specific locations
// enable creation of custom lists
// enable ranking of those users in those lists
// enable filtering by those rankings
// enable sending invites to those filtered friends

// use case example, you create an even on environmentalism, you can invite your friends for free but facebook will often limit how many people you can invite, so being able to more easily target the right people can radically expand your reach.

// order of next actions
// pull data from an api to get the contents of these people

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      searchField: '',
      filteredFriends: []
    };
    console.log('constructer');
  }

  componentDidMount() {
    console.log('component did mount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((friends) =>
        this.setState(() => {
          return { friends: friends };
        })
      );
  }

  handleClick = () => {};

  handleOnSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { friends, searchField } = this.state;
    const { handleOnSearchChange } = this;

    const filteredFriends = friends.filter((friend) => {
      return friend.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <button
          class="text-blue-600 bg-blue-100 btn--lg pull-right"
          style={{
            right: '0px ',
            position: 'relative',
            margin: '10px',
            marginLeft: '50vw'
          }}
          onClick={() => {
            this.handleClick();
          }}
        >
          Sign In with Facebook
        </button>
        <input
          className="search-box"
          type="search"
          placeholder="search friends"
          onChange={(event) => handleOnSearchChange(event)}
        ></input>
        <CardList filteredFriends={filteredFriends}></CardList>
      </div>
    );
  }
}

export default App;
