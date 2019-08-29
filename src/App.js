import React, { Component } from 'react';
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/owl.carousel.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './component/MainLayout/MainLayout';
import Submit from './component/Submit/Submit';
import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={MainLayout} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
