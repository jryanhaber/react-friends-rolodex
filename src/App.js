import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'cirrus-ui';
/*global FB*/

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
      fbSignedInID: '',
      fbSignedInName: '',
      accessToken: ''
    };
  }

  componentDidMount() {
    // check if user is already logged in
    // FB.getLoginStatus(function (response) {
    //   this.statusChangeCallback(response);
    // });

    // get dummy data
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

  // statusChangeCallback(response) {
  //   console.log('statusChangeCallback');
  //   console.log(response);
  //   // The response object is returned with a status field that lets the
  //   // app know the current login status of the person.
  //   // Full docs on the response object can be found in the documentation
  //   // for FB.getLoginStatus().
  //   if (response.status === 'connected') {
  //     // Logged into your app and Facebook.
  //     console.log('Welcome!  Fetching your information.... ');
  //     FB.api('/me', function (response) {
  //       console.log('Successful login for: ' + response.name);
  //       document.getElementById('status').innerHTML =
  //         'Thanks for logging in, ' + response.name + '!';
  //     });
  //   } else {
  //     // The person is not logged into your app or we are unable to tell.
  //     document.getElementById('status').innerHTML =
  //       'Please log ' + 'into this app.';
  //   }
  // }

  render() {
    return (
      <div className="App">
        {this.state.friends.map((friend) => {
          return <div key={friend.id}>{friend.name}</div>;
        })}
      </div>
    );
  }
}

export default App;
