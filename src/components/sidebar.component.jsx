import React from 'react';
import { Grid, Icon, Menu, Segment, Sidebar, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SideBar = ({ children }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as={Link} to="/">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/crypto">
              <Icon name="money" />
              Crypto
            </Menu.Item>
            <Menu.Item as={Link} to="/friend-lists">
              <Icon name="users" />
              Friend List
            </Menu.Item>
            <Menu.Item as={Link} to="/concepts">
              <Icon name="idea" />
              Concepts
            </Menu.Item>
            <Menu.Item as={Link} to="/add-friends">
              <Icon name="add" />
              Add Friends
            </Menu.Item>
            <Menu.Item as={Link} to="/goals">
              <Icon name="arrow circle right" />
              Goals
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic className="gradient-body">
              <Icon
                name="align justify"
                style={{
                  left: '50px',
                  display: 'inherit',
                  fontSize: '33px',
                  top: '30px',
                  marginTop: '10px',
                  marginLeft: '0px',
                  marginBottom: '-28px'
                }}
                onClick={() => setVisible(!visible)}
              />

              {children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default SideBar;
