import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FacebookLogin from 'react-facebook-login';

const ReactFacebookLogin = () => {
  const [accessToken, setAccessToken] = useState('');
  const [user_id, setuser_id] = useState('');

  const responseFacebook = (response) => {
    console.log(this.state.accessToken);
    setAccessToken(response.accessToken);
  };

  const componentClicked = (data) => {
    console.log(data);
  };

  // fetch(
  //   `https://graph.facebook.com/v12.0/{user_id}/friends?access_token={${this.state.accessToken}}`
  // ).then((response) => {
  //   console.log(response.json());
  // });

  return (
    <div>
      <br />
      {accessToken}
      <br />
      User short life access token
      <br />
      <FacebookLogin
        appId="1970003206410318"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        onClick={componentClicked}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactFacebookLogin /> ,
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
