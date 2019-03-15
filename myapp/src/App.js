import React, { Component } from 'react';
import {
  Route, Switch, BrowserRouter, Redirect
} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import Cookies from 'js-cookie';
import { store, history } from "./store";
import { OAUTH_TOKEN } from "./constants/authorization";
import './App.css';
import { browse, dashboard, callback } from './constants/pathnames';
import Browse from './components/Browse';
import { DEFAULT_GENRE } from './constants/genres';
import Dashboard from './components/Dashboard';
import Header from './components/Header';


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
          <div>
            {/* Switch stops searching for the path once the match is found */}
            <Header />
            <Switch>
              <Route exact path={`${browse}/:genre`} component={Browse} />
              <Route exact path={dashboard} component={Dashboard} />
              <Redirect to={`${browse}/${DEFAULT_GENRE}`} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
