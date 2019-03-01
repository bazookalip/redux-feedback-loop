import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import HowFeeling from '../HowFeeling/HowFeeling'
import { HashRouter as Router, Route } from 'react-router-dom';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';





class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
         
          {/* When we go to / load the ColorPage */}
          <Route exact path="/" component={HowFeeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/supported" component={Supported} />
          <Route exact path="/comments" component={Comments} />
      
        </div>
      </Router>
    );
  }
}


const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
