import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import Cookies from 'js-cookie';
import { store, history } from "./store";
import { OAUTH_TOKEN } from "./constants/authorization";
import './App.css';
import { browse, dashboard, callback } from './constants/pathnames';
import Browse from './components/Browse';
import Dashboard from './components/Dashboard';


class App extends Component {
  componentDidMount() {
    window.addEventListener('beforeunload', this.onAppClose);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onAppClose);
  }

  onAppClose = () => {
    Cookies.remove(OAUTH_TOKEN);
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {/* Switch stops searching for the path once the match is found */}
          <Switch>
            <Route exact path={`${browse}/:genre`} component={Browse} />
            <Route exact path={dashboard} component={Dashboard} />
          </Switch>
        </ConnectedRouter>
      </Provider>
      );
  }
}

export default App;
