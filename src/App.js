import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';

import Create from './pages/Create';



const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            {/* <Route exact path="/">
            </Route> */}
            <Route path="/">
              <Create/>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>

    </div>
  );
}

export default App;
