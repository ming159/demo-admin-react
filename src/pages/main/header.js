import React, {Component} from 'react'

import '../../assets/css/header.css'

import { Dropdown, Message } from 'element-react';

export default class Header extends Component {
    constructor (props) {
       super(props);
       this.state = {
           header_menu: [
               {name: '自然科学', index: 1},
               {name: '生态保护', index: 2},
               {name: '国家资源管理平台', index: 3},
               {name: '人文地理', index: 4},
               {name: '优化管理', index: 5}
           ]
       }
    }

    menuChange () {
        Message({
            type: 'info',
            message: '功能建设中，敬请期待！'
        });
        this.props.history.push('/home')
    }
    
    loginStart (command) {
        if (command==='logout') {
            // console.log(command,this)
            this.props.history.push('/')
        } else {
            this.props.history.push('/home/'+command)
        }
    }

    render() {
        return (
        <div className="header_box">
            <div className="header_menu" key="1">
            {
                this.state.header_menu.map((item,index)=>{
                    return (
                        <div className="header_item" key={index}
                        onClick={this.menuChange.bind(this)}>{item.name}</div>
                    )
                })
            }
            </div>
            <div className="header_setting" key="2">
                <Dropdown onCommand={this.loginStart.bind(this)} menu={(
                    <Dropdown.Menu>
                        <Dropdown.Item command="person">个人中心</Dropdown.Item>
                        <Dropdown.Item command="setting">设置</Dropdown.Item>
                        <Dropdown.Item command="logout">退出登录</Dropdown.Item>
                    </Dropdown.Menu>
                    )}
                    >
                    <span className="el-dropdown-link">
                        admin<i className="el-icon-setting el-icon--right"></i>
                    </span>
                </Dropdown>
            </div>
        </div>

        )
    }
}