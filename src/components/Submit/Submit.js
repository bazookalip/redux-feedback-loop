import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
class Submit extends Component {




    onSubmit = () => {
      this.props.history.push('/success');
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