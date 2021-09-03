import React , {Component} from "react";
import { Button } from 'element-react'

export default class DemoOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            // 
        }
    }

    btnclick(){
        // 
    }

    render(){
        return <div className="demo_v">
            <Button type="primary"
                    onClick={this.btnclick.bind(this)}>demo1</Button>
           <h1>demo1</h1>
        </div>
    }
}