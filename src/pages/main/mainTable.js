import React, {Component} from 'react'
import { Table, Button, MessageBox, Message } from 'element-react';
import apis from '../../api/main.js'

import {formatTime} from '../../utils/common.js'

export default class MainTable extends Component {
    constructor (props) {
       super(props);
       this.state = {
        columns: [
            {
              label: "日期",
              prop: "date",
              width: 180
            },
            {
              label: "姓名",
              prop: "name",
              width: 180
            },
            {
              label: "地址",
              prop: "address"
            },
            {
              label: "操作",
              prop: "address",
              render: (rows, column, index)=>{
                return (
                  <span>
                   <Button plain={true} type="info" size="small">编辑</Button>
                   <Button type="danger" size="small"
                   onClick={this.deleteConfirm.bind(this, index)}>删除</Button>
                  </span>
                )
              }
            }
        ],
        data: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }]
       }
       
    }

    componentDidMount(){
      this.getAllData()
    }

    deleteConfirm () {
      MessageBox.confirm('此操作将永久删除, 是否继续?', '提示', {
        type: 'warning'
      }).then(() => {
        Message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        Message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }

    getData () {
      let obj = {
        id:'123',
        key: 'main'
      }
      apis.getList(obj).then( res => {
        console.log(res)
      }).catch(err=>{
        //
      })
    }

    getAllData () {
      let obj = {
        prod: 'pc_his',
        from: 'pc_web',
        json: 1,
        sid: '34300_34334_34369_31660_34375_33848_34073_34092_34106_34094_26350_34238_34390',
        hisdata: [
          {"time":'1628582230623',"kw":"css背景铺满全屏"},
          {"time":'1628563249123',"kw":"animation css"},
          {"time":'1628563284333',"kw":"animation.css"},
          {"time":'1628574099444',"kw":"react ajax请求"},
          {"time":'1628576609555',"kw":"react createproxymiddleware"},
          {"time":'1628576995777',"kw":"react 请求拦截"},
          {"time":'1628577949543',"kw":"react 代理请求 404"},
          {"time":'1628578346432',"kw":"axios 请求"},
          {"time":'1628579126345',"kw":"在线json 资源"},
          {"time":'1628579142435',"kw":"在线接口"}],
        _t: '1628579251132',
        req: 2,
        bs: '在线接口',
        csor: 0
      }
      apis.getAllData(obj).then( res => {
        console.log(res)
        // this.render()
      }).catch(err=>{
        let resArr = [];
        obj.hisdata.map( (r, index) => {
          return resArr.push({
            date: formatTime( parseInt(r.time) ),
            name: r.kw,
            address: '上海市普陀区金沙江路 151'+index+' 弄'
          })
        });
        this.setState({
          data: resArr
        }, ()=>{
          console.log(this.state.data)
        }) 
      })
    }

    render() {
        this.getData()
        return (
        <div className="main_table">
            <Table
                style={{width: '100%'}}
                columns={this.state.columns}
                maxHeight={200}
                data={this.state.data}
            />
        </div>
        )
    }
}