import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
import MainTable from '../components/MainTable';

export default class Main extends Component {
    constructor (props) {
       super(props);
       this.state = { }
    }
    loginStart () {
        // return <Redirect to="/Login" />;
        this.props.history.push('/Login')
    }
    render() {
        return (
        <div>
            Main
            <button onClick={this.loginStart.bind(this)}>login</button>
            <MainTable></MainTable>
        </div>
        )
    }
}