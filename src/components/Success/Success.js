import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {


    onSubmit = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <header className="App-header">
                   

                </header>

                <div className="container">
                    <h1>Thank You!</h1>
                    <button onClick={this.onSubmit}>Leave New Feedback</button>
                </div>

            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(ReviewFeedback);