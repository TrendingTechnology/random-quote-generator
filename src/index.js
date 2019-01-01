import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { redA400 } from 'material-ui/styles/colors';
import App from './components/App.js';
import setupLogRocket from './utils/logrocket';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import './styles/index.css';
import './styles/media.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: redA400,
  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);

setupLogRocket();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
