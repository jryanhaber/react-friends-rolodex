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
            <Link to="/">
              <Menu.Item as="span">
                <Icon name="home" />
                Home
              </Menu.Item>
            </Link>
            <Link to="/crypto">
              <Menu.Item as="a">
                <Icon name="money" />
                Crypto
              </Menu.Item>
            </Link>
            <Link to="/friend-lists">
              <Menu.Item as="span">
                <Icon name="users" />
                Friend List
              </Menu.Item>
            </Link>
            <Link to="/concepts">
              <Menu.Item as="span">
                <Icon name="idea" />
                Concepts
              </Menu.Item>
            </Link>
            <Link to="/add-friends">
              <Menu.Item as="span">
                <Icon name="add" />
                Add Friends
              </Menu.Item>
            </Link>
            <Link to="/goals">
              <Menu.Item as="span">
                <Icon name="arrow circle right" />
                Goals
              </Menu.Item>
            </Link>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic className="gradient-body">
              <Button
                icon
                style={{
                  display: 'flex',
                  position: 'absolute',
                  left: '14px',
                  top: '5px'
                }}
                onClick={(e, data) => setVisible(!visible)}
              >
                <Icon name="align justify" />
              </Button>

              {children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default SideBar;
