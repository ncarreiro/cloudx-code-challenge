import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Router from './router';
import { Header } from './components';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <Header/>
          <Router/>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;