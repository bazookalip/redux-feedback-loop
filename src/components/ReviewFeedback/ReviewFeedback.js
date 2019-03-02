import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {


    render() {
        return (


            <div className="container">
                <h1>Review Your Feedback</h1>

                <ul>
                    <li> Feelings: {this.props.feelings}</li>
                    <li> Understanding: {this.props.understanding} </li>
                    <li> Support: {this.props.supported}</li>
                    <li> Comments: {this.props.comments}</li>
                    <li><button>Incomplete</button></li>
                </ul>
               
            </div>


        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(ReviewFeedback);