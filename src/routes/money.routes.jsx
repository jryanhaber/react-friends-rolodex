import SideBar from '../components/sidebar.component.jsx';
import { Header } from 'semantic-ui-react';

export default function Crypto() {
  return (
    <SideBar>
      <main className="App">
        <Header as="h3">Crypto</Header>
        <div>
          This is designed to be a small widget that shows the total value of
          your crypto holdings presently
        </div>
      </main>
    </SideBar>
  );
}
