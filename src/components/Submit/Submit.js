import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Submit extends Component {

    state = {
        feelings: '',
        understanding: '',
        supported: '',
        comments: '',
    }
    
    onSubmit = () => {
        axios({
            method: 'POST',
            url: '/results',
            data: {
                feeling: this.props.reducer.feelings,
                understanding: this.props.reducer.understanding,
                support: this.props.reducer.support,
                comments: this.props.reducer.comment,
            }
        }).then(() => {
            this.props.history.push('/success')
        })
        this.setState = {
            feelings: '',
            understanding: '',
            supported: '',
            comments: '',
        }

      
    }

    render() {
        let button = null;

        

        if (this.props.reducer.feelings !== '' && this.props.reducer.understanding !=='' && this.props.reducer.support !== '' && this.props.reducer.comment !== '') 
            { 
                button = <button onClick={this.onSubmit}>Submit</button>
            }
        else {
            button = <button disabled>Incomplete</button>
        }

        

        return (

            <>

            {/* <Header/> */}

            <div className="container">
                <h1>Review Your Feedback</h1>

                <ul>
                    <li> Feelings: {this.props.reducer.feelings}</li>
                    <li> Understanding: {this.props.reducer.understanding} </li>
                    <li> Support: {this.props.reducer.support}</li>
                    <li> Comments: {this.props.reducer.comment}</li>
                </ul>
                {button}
               
            </div>
            </>

        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Submit);