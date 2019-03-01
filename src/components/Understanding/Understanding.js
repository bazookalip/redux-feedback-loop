import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux';

class Understanding extends Component {


    onSubmit() {
        console.log('clicked!')
    }



    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <h1>How well are you understanding the content? </h1>

                    <input type="number" name="quantity" min="1" max="5" placeholder="5" />
                    <button onSubmit={this.onSubmit}>Next</button>
                </div>
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

export default connect(mapReduxStateToProps)(Understanding);