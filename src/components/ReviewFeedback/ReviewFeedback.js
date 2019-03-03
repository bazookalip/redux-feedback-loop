import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {


    render() {
        return (


            <div className="container">
                <h1>Review Your Feedback</h1>

                <ul>
                    <li> Feelings: {this.props.reducer.feelings}</li>
                    <li> Understanding: {this.props.reducer.understanding} </li>
                    <li> Support: {this.props.reducer.support}</li>
                    <li> Comments: {this.props.reducer.comment}</li>
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