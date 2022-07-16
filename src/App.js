import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

// pull in all of your friends from facebook
// enable filters that do not exist in facebook
// enable filtering by friends in specific locations
// enable creation of custom lists
// enable ranking of those users in those lists
// enable filtering by those rankings
// enable sending invites to those filtered friends

// use case example, you create an even on environmentalism, you can invite your friends for free but facebook will often limit how many people you can invite, so being able to more easily target the right people can radically expand your reach.

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: 'Jonathan', key: '96872367' },
        { name: 'David', key: '968d723d67' },
        { name: 'Jason', key: '96d872d367' },
        { name: 'Marc', key: 'dasdfdsaf' },
        { name: 'Katya', key: '4asd' }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}>{monster.name}</div>;
        })}
      </div>
    );
  }
}

export default App;
