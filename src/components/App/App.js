import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import HowFeeling from '../HowFeeling/HowFeeling'
import { HashRouter as Router, Route } from 'react-router-dom';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Submit from '../Submit/Submit'
import Success from '../Success/Success';
import Admin from '../Admin/Admin';





class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
    
          <Route exact path="/" component={HowFeeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/supported" component={Supported} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/submit" component={Submit} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/5" component={Admin} />
      
        </div>
      </Router>
    );
  }
}


const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
