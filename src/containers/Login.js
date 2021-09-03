import React, {Component} from 'react'
import { Carousel } from 'element-react';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
        data:[
          {k: 10, bg:'red'},
          {k: 20, bg:'yellow'},
          {k: 30, bg:'blue'},
          {k: 40, bg:'green'}
        ]
    }
  }
  regisStart () {
    this.props.history.push('/Register')
  }
  render() {
    return (
    <div className="demo-2 medium">
        Login
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
      </Carousel>
    </div>
    )
  }
}