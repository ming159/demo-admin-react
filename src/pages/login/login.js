import React, {Component} from 'react'
import { Input, Button, Form, Message } from 'element-react';
import '../../assets/css/login.css'

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
        data:[
          {k: 10, bg:'red'},
          {k: 20, bg:'yellow'},
          {k: 30, bg:'blue'},
          {k: 40, bg:'green'}
        ],
        form: {
          username: '',
          password: '',
          code: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名称', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入账号密码', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ]
        }
    }
  }
  regisStart (e) {
    e.preventDefault();
  
    this.refs.form.resetFields();

    this.props.history.push('/Register')
  }
  redirectHome (e) {
    e.preventDefault();
  
    this.refs.form.validate((valid) => {
      if (valid) {
        this.props.history.push('/home')
      } else {
        Message({
          type: 'error',
          message: '校验不通过，请确认后重试'
        });
        return false;
      }
    });
    // this.props.history.push('/')
  }
  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  }

  render() {
    return (
    <div className="demo-2 medium login_box">
        {/* Login
        <button onClick={this.regisStart.bind(this)}>Register</button>
        <Carousel indicatorPosition="outside">
        {
          this.state.data.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <div className="car_r_item" style={{background: item.bg,height:'100%'}}>
                  <h3>{item.k}</h3>
                </div> 
              </Carousel.Item>
            )
          })
        }
      </Carousel> */}
      <div className="login_panel animate__animated animate__backInLeft">
        <Form
        ref="form"
        model={this.state.form}
        rules={this.state.rules}>
          <Form.Item prop="username">
          <Input className="form_item" placeholder="请输入用户名称" prepend={
            <i className="el-icon-setting el-icon--right"></i>
          }
          value={this.state.form.username} onChange={this.onChange.bind(this, 'username')}/>
          </Form.Item>
          <Form.Item prop="password">
          <Input className="form_item" placeholder="请输入账号密码" prepend={
            <i className="el-icon-menu el-icon--right"></i>
          }
          value={this.state.form.password} onChange={this.onChange.bind(this, 'password')}/>
          </Form.Item>
          <Form.Item prop="code">
          <Input className="form_item" placeholder="请输入验证码" prepend={
            <i className="el-icon-delete el-icon--right"></i>
          }
          value={this.state.form.code} onChange={this.onChange.bind(this, 'code')}/>
          </Form.Item>
        </Form>
        <Button className="form_item" type="primary"
        onClick={this.redirectHome.bind(this)}>登录</Button>
        <Button className="form_item" type="text"
        onClick={this.regisStart.bind(this)}>注册</Button>
      </div>
    </div>
    )
  }
}