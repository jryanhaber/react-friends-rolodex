import React, { Component } from 'react';
import { Header, Segment, Sidebar } from 'semantic-ui-react';

export default class Concepts extends Component {
  render() {
    return (
      <div className="App friendPage">
        <Sidebar>
          <Segment fluid className="first-segment">
            <Header as="h3">Concepts</Header>
            <p>
              Purpose: Capture and rank ideas and concepts for additional mini
              apps which could live in this mother app
            </p>
          </Segment>
          {/* <Segment>
            <CardList filteredFriends={filteredFriends}></CardList>
          </Segment> */}
        </Sidebar>
      </div>
    );
  }
}
