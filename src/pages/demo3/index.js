import React , {Component} from "react";
import { Button } from 'element-react'

export default class DemoThree extends Component {
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
                    onClick={this.btnclick.bind(this)}>three</Button>
           <h1>three</h1>
        </div>
    }
}