import React, { Component } from 'react';
import Replate from './pages/home'

// import { Security, ImplicitCallback } from '@okta/okta-react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './Home';


// const config = {
//   issuer: 'https://dev-606373.oktapreview.com/oauth2/default',
//   redirect_uri: window.location.origin + '/implicit/callback',
//   client_id: ''
// }

var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(
  type Query {
    hello: String
  }
);

var root = { hello: () => 'Hello world!' };

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});


class App extends Component {
  render() {
    return (
      <Replate />
    );
  }
}

export default App;
