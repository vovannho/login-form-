import './assets/css/dist/tailwind.css';
import React  from 'react';
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import RegisterUser from './pages/users/RegisterUser';
import LoginUser from './pages/users/LoginUser';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={`/LoginUser`}
          component={LoginUser}
        />
        <Route
          exact
          path={`/RegisterUser`}
          component={RegisterUser}
        />
        <Route
          exact
          path={`/`}
          render={() => <Redirect to="/RegisterUser" />}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
