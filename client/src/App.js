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


class App extends Component {
  render() {
    return (
      <div>
      <Replate />
      {/* <Router>
        <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        >
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router> */}
      </div>
    );
  }
}

export default App;
