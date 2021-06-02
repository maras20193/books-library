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
import AuthProvider from './context/AuthContext';
import { useAuth } from './hooks/useAuth'
import PrivateRoute from './components/PrivateRoute'


function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <Router>
              <Switch>
                {/* user routes */}
                <PrivateRoute exact path="/" >
                  <Layout>
                    <Notes/>
                  </Layout>
                </PrivateRoute>
                <PrivateRoute path="/create">
                  <Layout>
                    <Create/>
                  </Layout>
                </PrivateRoute>
                <PrivateRoute path="/statistics">
                  <Layout>
                    <div>wykresy</div>
                  </Layout>
                </PrivateRoute>

                {/* auth routes */}
                <Route path="/login">
                  <LayoutLogin>
                    <Login/>
                  </LayoutLogin>
                </Route>
                <Route path="/signup">
                  <LayoutLogin>
                    <Login type='signup'/>
                  </LayoutLogin>
                </Route>
                  
              </Switch>
            </Router>
          </ThemeProvider>
        </AppProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
