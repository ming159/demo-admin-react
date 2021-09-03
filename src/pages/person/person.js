import React, {Component} from 'react'
import { Card, Button, MessageBox, Message } from 'element-react';
import '../../assets/css/person.css'

export default class Person extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  backConfirm () {
    MessageBox.confirm('是否确定返回?', '提示', {
        type: 'warning'
      }).then(() => {
        this.props.history.push('/home')
      }).catch(() => {
        Message({
          type: 'info',
          message: '已取消返回'
        });
      });
  }
  render() {
    return (
        <div className="person_box">
            <Card
            className="box-card"
            header={
                <div className="clearfix">
                <span style={{ "lineHeight": "36px" }}>卡片名称</span>
                <span style={{ "float": "right" }}>
                    <Button type="primary"
                    onClick={this.backConfirm.bind(this)}>返回主页</Button>
                </span>
                </div>
            }
            >
            <div className="text item">列表内容 1</div>
            <div className="text item">列表内容 2</div>
            <div className="text item">列表内容 3</div>
            <div className="text item">列表内容 4</div>
            </Card>
        </div>
    )
  }
}