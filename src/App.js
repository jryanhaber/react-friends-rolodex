import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'cirrus-ui';

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
      filter: '',
      filteredFriends: []
    };
    console.log('constructer');
  }

  componentDidMount() {
    console.log('component did mount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      // console.log(response);
      // the response from the fetch is this response cors object with a readable stream as a body, which wont exactly show in the console.
      // console.log(response.body);
      // but when converted to json() it changes to this promise object which has a result, and the result is the array.  Thats the array we want to use initially to set our app state as the users object.
      // console.log(response.json());
      // so by passing the response to a new function which then returns the response.json() ( conversion ) we in essence transform the property that we are passing through this function, like taking the response and passing to a function sort() which returns the sorted array.
      // so this following statement says, then after the returned function completes, take what is returned by it ( response.json ), and pass that as a property called users and console log it

      .then((friends) =>
        this.setState(
          () => {
            return { friends: friends };
          },

          () => {
            console.log(this.state);
          }
        )
      );
  }

  handleClick() {
    alert('sign in started');
  }

  handleOnChange(event) {
    // filter creates a new array from whatever passes the logical test it is given, so this creates the filtered list.
    const searchString = event.target.value.toLocaleLowerCase();
    const filteredFriends = this.state.friends.filter((friend) => {
      return friend.name.toLocaleLowerCase().includes(event.target.value);
    });
    console.log(this.state);
    this.setState(
      () => {
        return { filteredFriends: filteredFriends };
      },
      () => {
        // callback for after state update
      }
    );
  }

  render() {
    console.log('render called');
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
          onChange={(event) => this.handleOnChange(event)}
        ></input>
        {this.state.filteredFriends
          ? this.state.filteredFriends.map((friend) => {
              return <div key={friend.id}>{friend.name}</div>;
            })
          : this.state.friends.map((friend) => {
              return <div key={friend.id}>{friend.name}</div>;
            })}
      </div>
    );
  }
}

export default App;
