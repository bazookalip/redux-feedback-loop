import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {


    onSubmit = () => {
        this.props.dispatch({ type: 'RESET' });
        this.props.history.push('/');
    }

    onAdmin = () => {
        this.props.history.push('/admin');
    }

    render() {
        return (
            <>
                <header className="App-header">
                   

                </header>

                <div className="container">
                    <h1>Thank You</h1>
                    <button onClick={this.onSubmit}>Leave New Feedback</button> <br/>
                    <button onClick={this.onAdmin}>Admin Page</button>
                </div>

            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(ReviewFeedback);