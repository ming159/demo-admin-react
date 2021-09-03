import React , {Component} from "react";
import { Button } from 'element-react'

export default class DemoTwo extends Component {
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
                    onClick={this.btnclick.bind(this)}>2222</Button>
           <h1>22222</h1>
        </div>
    }
}