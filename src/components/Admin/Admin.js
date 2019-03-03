import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header'

class Admin extends Component {
    state = {
        results: [],

    }


    onSubmit = () => {
        this.props.history.push('/');
    }

    componentDidMount() {
        // console.log('in component did mount');
        this.getResults();
    }

    getResults = () => {
        //make call to server using axios
        axios({
            method: 'GET',
            url: '/results',
        }).then((response) => {
            //  console.log('data here', response.data);
            this.setState({
                results: response.data
            });
        }).catch((error) => {
            alert('could not get results');
            console.log('could not get results', error);
        })
    }


    adminList () {
        return  this.state.results.map(results =>
                            <tr>
                            <td> {results.id} </td>
                            <td> {results.feeling} </td>
                            <td>{results.understanding}</td>
                            <td>{results.support}</td>  
                            <td>{results.comments}</td>
                            <td><button>delete</button></td>
                                
                            </tr>
                        )
    }

    render() {
        console.log(this.state.results)
        return (
        
            <div className="App">
               
              <Header/>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                    <tbody>
                        {this.adminList()}
                    </tbody>
                 
                </table>

                <button onClick={this.onSubmit}>Home</button>

            </div>
            
        );
    }
}

export default Admin;
