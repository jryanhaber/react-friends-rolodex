import { Component } from 'react';

class CardList extends Component {
  render() {
    return (
      <div>
        Hello I am the cardlist component
        {this.props.filteredFriends.map((friend) => {
          return <div key={friend.id}>{friend.name}</div>;
        })}
      </div>
    );
  }
}

export default CardList;
