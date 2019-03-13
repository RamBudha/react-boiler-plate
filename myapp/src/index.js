import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './index.css';
import App from './App';

const render = Component => ReactDOM.render(
  <AppContainer>
    <Component />
  </AppContainer>,
  document.getElementById('root'),
);
render(App);

if (module.hot) {
  module.hot.accept(App, () => {
    render(App);
  });
}


// // import React from 'react';
// import ReactDOM from 'react-dom';
// import React from 'react';
// import { AppContainer } from 'react-hot-loader';
// import { Provider } from 'react-redux';
// /*  AppContainer is a component, provided by react-hot-loader,
//     that handles hot reloading, as well as error handling.
//     It also internally handles disabling hot reloading/error handling
//     when running in a production environment,
//     so you no longer have to.
//     Note that <AppContainer> must only wrap a single React component.
// */
// import App from './components/App';
// import configureStore from './stores/configureStore';

// const store = configureStore();

// function render(Component) {
//   ReactDOM.render(
//     <AppContainer>
//       <Provider store={store}>
//         <Component />
//       </Provider>
//     </AppContainer>,
//     document.getElementById('root')
//   );
// }

// render(App);

// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     // const NextApp = require('./App').default;
//     render(App);
//   });
// }
