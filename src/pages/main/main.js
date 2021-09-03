import React, {Component} from 'react'
import MainTable from './mainTable.js';

export default class Main extends Component {
    constructor (props) {
       super(props);
       this.state = { }
    }
    render() {
        if(this.props.location.pathname==='/home') {
            return ( 
                <div className="react_app">
                    <MainTable></MainTable>
                </div>
            )
        } else {
            return ''
        }
    }
}