import React , {Component} from "react";

import Header from "../main/header";
import LeftMenu from "../main/menu";
// import Main from "../main/main";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            // 
        }
    }

    findPath(){ debugger
        let index = 0;
        for(let i=0;i<this.props.children.length;i++){
            if(this.props.children[i].path==='/'){
                index = i
            }
        }
        console.log(index)
        return index
    }

    render(){
        return <div className="home_v">
            <Header history={this.props.history}></Header>
            <div className="home_container">
                <div className="home_menu">
                    <LeftMenu history={this.props.history}></LeftMenu>
                </div>
                <div className="home_main">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}