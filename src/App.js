import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Router from './router';
import { Header } from './components';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
          <Grid
            container
            justify="center"
          >
            <Grid item xs>
            </Grid>
            <Grid item xs={8}>
              <Router/>
            </Grid>
            <Grid item xs>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;