import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme'

import Create from './pages/Create';
import Notes from './pages/Notes';
import Layout from './components/Layout';
import AppProvider, { AppContext } from './context/AppContext';
import Loader from './components/Loader';
import { useContext } from 'react';


function App() {
  
  return (
    <div className="App">
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <Notes/>
                </Route>
                <Route path="/create">
                  <Create/>
                </Route>
              </Switch>
            </Layout>
          </Router>
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}

export default App;
