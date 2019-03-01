import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux';


class Supported extends Component {


    onSubmit() {
        console.log('clicked!')
    }



    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <h1>How well are you being supported? </h1>

                    <input type="number" name="quantity" min="1" max="5" placeholder="5" />
                    <button onSubmit={this.onSubmit}>Next</button>
                </div>
                <div className="container">
                    <h1>Review Your Feedback</h1>

                    <ul>
                        <li> Feelings: 5</li>
                        <li> Understanding: 5</li>
                        <li> Support: 5</li>
                        <li> Comments: This rocks</li>
                        <li><button>Incomplete</button></li>
                    </ul>
                </div>

            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Supported);