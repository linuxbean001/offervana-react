import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FAQ from '../FAQ/FAQ';
import Login from '../Login/Login';
import Sell from '../Sell/Sell';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Messages from '../Messages/Messages';
import Media from '../Media/Media';
import Submit from '../Submit/Submit';
import Select from '../Select/Select';
import Sold from '../Sold/Sold';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Sell} />
              <Route path="/faq" component={FAQ} />
              <Route path="/login" component={Login} />
              <Route path="/about" component={AboutUs} />
              <Route path="/msg" component={Messages} />
              <Route path="/media" component={Media}/>
              <Route path="/submit" component={Submit}/>
              <Route path="/select" component={Select} />
              <Route path="/sold" component={Sold}/>
            </Switch>
             <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default MainLayout;
