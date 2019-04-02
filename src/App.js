import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createBrowserHistory } from "history";

import store from './store';
import Router from './router';

import {
  Header,
  Footer
} from './components';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';
import CssBaseline from '@material-ui/core/CssBaseline';

import 'moment-timezone';
import 'typeface-roboto';
import 'material-icons';

const history = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
    secondary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
    },
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
    htmlFontSize: 16,
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <Header/>
          <Grid
            container
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={8}
            >
              <Router history={history}/>
            </Grid>
          </Grid>
          <Footer/>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;