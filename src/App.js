import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home';
import Project from './pages/Project';
import Detail from './pages/Detail';
import Register from './pages/Register';
import Profile from './pages/Profile';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/detail-project" component={Detail} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    )
  }
}

export default App;
