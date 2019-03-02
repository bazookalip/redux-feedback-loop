import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'





class Understanding extends Component {
    state = {
        understanding: 0,
    }

    onNextClick = () => {
        this.props.dispatch({ type: 'UNDERSTANDING', payload: this.state.understanding })
        this.props.history.push('/supported');
    }

    onChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }


    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <h1>How well are you understanding the content? </h1>
                    <input onChange={this.onChange} type="number" name="quantity" min="0" max="5" placeholder="0" />
                    <button onClick={this.onNextClick}>Next</button>
                </div>
                <ReviewFeedback />

            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Understanding);