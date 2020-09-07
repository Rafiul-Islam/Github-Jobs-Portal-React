import React, {Component} from 'react';
import axios from "axios";

class UseFatchJobs extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json')
            .then(res => {
                const persons = res.data;
                this.setState({persons});
                console.log(this.state.persons[1])
            })
            .catch(function (error) {
                // handle error
                console.log(error.message);
            })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default UseFatchJobs;
