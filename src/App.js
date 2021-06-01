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
import Login from './pages/Login';
import LayoutLogin from './components/LayoutLogin';


function App() {

  const isUser = false;
  
  return (
    <div className="App">
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              {isUser 
              ? 
              <Layout>
                <Route exact path="/">
                  <Notes/>
                </Route>
                <Route path="/create">
                  <Create/>
                </Route>
                <Route path="/statistics">
                  <div>wykresy</div>
                </Route>
              </Layout>
              :
              <LayoutLogin>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/signup">
                <Login type='signup'/>
              </Route>
              </LayoutLogin>
                }
            </Switch>
          </Router>
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}

export default App;
