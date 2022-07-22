/* eslint-disable jsx-a11y/alt-text */
import { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

// The purpose of this component is render dummy data and mock up a ui for a friends list.

class CardList extends Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.filteredFriends.map((friend) => {
          return (
            <Card>
              <Image
                src={
                  friend.photo ||
                  'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
                }
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{friend.name}</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  {friend.name} is a musician living in{' '}
                  {friend?.address?.city || 'an unknown place'}.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default CardList;
