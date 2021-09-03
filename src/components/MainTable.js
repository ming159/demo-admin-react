import React, {Component} from 'react'
import { Table } from 'element-react';

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
    render() {
        return (
        <div>
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