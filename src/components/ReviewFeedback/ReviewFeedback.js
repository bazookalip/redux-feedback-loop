import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux';

class ReviewFeedback extends Component {


    onSubmit() {
        console.log('clicked!')
    }



    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <h1>Review Your Feedback</h1>

                    <ul>
                        <li> Feelings: </li>
                        <li> Understanding: </li>
                        <li> Support: </li>
                        <li> Comments: </li>
                    </ul>
                </div>

            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(ReviewFeedback);