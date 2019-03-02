import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import axios from 'axios';


class Submit extends Component {

    


    onSubmit = () => {
        axios({
            method: 'POST',
            url: '/results',
            data: {
                feeling: this.props.feelings,
                understanding: this.props.understanding,
                support: this.props.supported,
                comments: this.props.comments
            }
        }).then(() => {
            this.props.history.push('/success')
            console.log('in post .then')
        })

      
    }

    render() {
        return (

            <>

            <Header/>

            <div className="container">
                <h1>Review Your Feedback</h1>

                <ul>
                    <li> Feelings: {this.props.feelings}</li>
                    <li> Understanding: {this.props.understanding} </li>
                    <li> Support: {this.props.supported}</li>
                    <li> Comments: {this.props.comments}</li>
                </ul>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
            </>

        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Submit);