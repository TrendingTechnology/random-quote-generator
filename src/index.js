import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { redA400 } from 'material-ui/styles/colors';
import 'normalize.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
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
registerServiceWorker();
