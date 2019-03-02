import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Supported extends Component {

    state = {
        feeling: 0,
    }

    onNextClick = () => {
        this.props.dispatch({ type: 'SUPPORTED', payload: this.state.feeling })
        this.props.history.push('/comments');
    }

    onChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <h1>How well are you being supported? </h1>
                    <input onChange={this.onChange} type="number" name="quantity" min="0" max="5" placeholder="0" />
                    <button onClick={this.onNextClick} onSubmit={this.onSubmit}>Next</button>
                </div>
                <ReviewFeedback/>

            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Supported);