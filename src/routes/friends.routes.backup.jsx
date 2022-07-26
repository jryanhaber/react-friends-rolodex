import logo from '../logo.svg';
import '../App.css';
import React, { Component } from 'react';
import CardList from '../components/card-list/card-list.component.jsx';
import SearchBox from '../components/search-box/search-box.component.jsx';
import SideBar from '../components/sidebar.component.jsx';
import { Header, Segment } from 'semantic-ui-react';
import * as rawData from '../rawData.js';
import { useState } from 'react';

const App = () => {
  const [friends, setFriends] = useState([]);
  const [searchField, setSearchField] = useState('');

  // define a function to get friends via the api and set the state
  const getFriendsViaApi = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((friends) => setFriends(rawData.rawData));
  };

  getFriendsViaApi();

  // generate a filtered friends list based on the the search field
  const filteredFriends = friends.filter((friend) => {
    return friend.name.toLocaleLowerCase().includes(searchField);
  });

  console.log({ searchField });

  const handleOnSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App friendPage">
      <SideBar>
        <Segment className="first-segment">
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

// class App2 extends Component {
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
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((friends) =>
//     this.setState(
//       () => {
//         return { friends: friends };
//       },
//       () => {
//         console.log(this.state);
//       }
//     )
//   );
//   }

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
