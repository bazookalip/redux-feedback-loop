import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux';
import Submit from '../Submit/Submit'

class Comments extends Component {


    state = {
        feeling: '',
    }

    onNextClick = () => {
        this.props.dispatch({ type: 'COMMENTS', payload: this.state.feeling })
        this.props.history.push('/submit');
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
                    <h1>Any comments you want to leave?</h1>
                    <input onChange={this.onChange} type="text" />
                    <button onClick={this.onNextClick}>Next</button>
                </div>
                <Submit/>

            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Comments);