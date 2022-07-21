import SideBar from '../components/sidebar.component.jsx';
import { Header, Segment } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';

export default function Crypto() {
  const [state, setState] = useState({
    rates: {
      price: null
    }
  });
  // useEffect(() => {
  //   fetch('https://api.coinbase.com/v2/exchange-rates').then((res) => {
  //     setState(res.data);
  //   });
  // });

  useEffect(() => {
    const url = 'https://api.binance.com/api/v3/ticker/price?symbol=HOTUSDT';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setState(
          () => {
            return { rates: json };
          },
          () => {
            console.log(state);
          }
        );
      } catch (error) {
        console.log('error', error);
      }
    };
    setInterval(function () {
      fetchData();
    }, 5000);
  }, []);

  var formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  let x = formattedValue.format(state.rates.price * 8145000);

  return (
    <SideBar>
      <main className="App">
        <Segment className="first-segment">
          <Header as="h3">Crypto</Header>
          <p>
            This is designed to be a small widget that shows the total value of
            your crypto holdings presently
          </p>
          <p>Method: Wire in api call to coinbase.com</p>
          <h1> {state.rates.price === null ? 'loading...' : x}</h1>
        </Segment>
      </main>
      <Segment></Segment>
    </SideBar>
  );
}
