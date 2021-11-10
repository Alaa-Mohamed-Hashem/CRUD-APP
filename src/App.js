import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div style={{ maxWidth: '30rem', margin: '4rem auto' }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch >
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;


// React - Context API - Router - Hooks - Bootstrap - Localstorage