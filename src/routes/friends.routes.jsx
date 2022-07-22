import logo from '../logo.svg';
import '../App.css';
import React, { Component } from 'react';
import CardList from '../components/card-list/card-list.component.jsx';
import SearchBox from '../components/search-box/search-box.component.jsx';
import SideBar from '../components/sidebar.component.jsx';
import { Header, Segment } from 'semantic-ui-react';
import * as rawData from '../rawData.js';
// import 'semantic-ui-css/semantic.min.css';

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

const App = () => {
  return (
    <div className="App friendPage">
      <SideBar>
        <Segment fluid className="first-segment">
          <Header as="h3">Friend Module</Header>
          <p style={{ fontSize: '16px' }}>
            Purpose: Build a quick prototype of a friends list page for a social
            network. This is v2, and its intended to utilize real facebook
            friends list data. They have recently blocked this sort of access,
            so this prototype uses hard coded data.
          </p>{' '}
          <SearchBox
            onChangeHandler={handleOnSearchChange}
            className="search-box"
            placeholder="search friends"
          />
        </Segment>
        <Segment>
          <CardList filteredFriends={filteredFriends}></CardList>
        </Segment>
      </SideBar>
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       friends: [],
//       searchField: '',
//       filteredFriends: []
//     };
//     console.log('constructer');
//   }

//   componentDidMount() {
//     console.log('component did mount');
//     this.setState(() => {
//       return {
//         friends: rawData.rawData
//       };
//     });
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     //   .then((response) => response.json())
//     //   .then((friends) =>
//     //     this.setState(
//     //       () => {
//     //         return { friends: friends };
//     //       },
//     //       () => {
//     //         console.log(this.state);
//     //       }
//     //     )
//     //   );
//   }

//   handleClick = () => {};

//   handleOnSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { friends, searchField } = this.state;
//     const { handleOnSearchChange } = this;

//     const filteredFriends = friends.filter((friend) => {
//       return friend.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App friendPage">
//         <SideBar>
//           <Segment fluid className="first-segment">
//             <Header as="h3">Friend Module</Header>
//             <p style={{ fontSize: '16px' }}>
//               Purpose: Build a quick prototype of a friends list page for a
//               social network. This is v2, and its intended to utilize real
//               facebook friends list data. They have recently blocked this sort
//               of access, so this prototype uses hard coded data.
//             </p>{' '}
//             <SearchBox
//               onChangeHandler={handleOnSearchChange}
//               className="search-box"
//               placeholder="search friends"
//             />
//           </Segment>
//           <Segment>
//             <CardList filteredFriends={filteredFriends}></CardList>
//           </Segment>
//         </SideBar>
//       </div>
//     );
//   }
// }

// export default App;

// WIP Facebook Login

//  <button
//    class="text-blue-600 bg-blue-100 btn--lg pull-right"
//    style={{
//      right: '0px ',
//      position: 'relative',
//      margin: '10px',
//      marginLeft: '50vw'
//    }}
//    onClick={() => {
//      this.handleClick();
//    }}
//  >
//    Sign In with Facebook
//  </button>;
