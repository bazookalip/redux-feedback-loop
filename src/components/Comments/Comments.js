import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux';


class Comments extends Component {


    onSubmit() {
        console.log('clicked!')
    }



    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <h1>Any comments you want to leave?</h1>

                    <input type="text" />
                    <button onSubmit={this.onSubmit}>Next</button>
                </div>
                <div className="container">
                    <h1>Review Your Feedback</h1>

                    <ul>
                        <li> Feelings: 5</li>
                        <li> Understanding: 5</li>
                        <li> Support: 5</li>
                        <li> Comments: This rocks</li>
                    </ul>
                </div>

            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Comments);