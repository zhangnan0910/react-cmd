import React, { Component, Fragment } from "react";
import './index.css';
import http from "@/utils/http";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

class ADmanage extends Component {
    constructor(){
        super()
        this.setState = {
            arr: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    }
    render(){
        console.log(this.props)
        return <Fragment>
            <ul className='top'>
                <li>
                    <span>现金账户</span>
                    <h5>126,560,00</h5>
                </li>
                <li>
                    <span>今日消耗</span>
                    <h5>5,400</h5>
                </li>
            </ul>

            <div className='box'>
                <header>
                    <h4>整体情况</h4>
                    <div className="right">
                        <ul className="tab">
                            <li>7天</li>
                            <li>近30天</li>
                        </ul>
                        <div style={{lineHeight:'50px'}}>
                            <RangePicker renderExtraFooter={() => 'extra footer'} />
                        </div>
                    </div>
                </header>
                <div style={{ width: '100%', height: '400px' }} ref="graph"></div>
            </div>
        </Fragment>
    }
    componentDidMount(){
        let arr = []
        
        // 参数(Dom)
        let echartsInstance = echarts.init(this.refs.graph)
        http.post("/dsp-report/index",{
            count:10
        }).then(res=>{

            option.series[0].data = res.data.dataY1
            echartsInstance.setOption(option)
        })
        var start = moment().startOf('week');
        var end = moment().endOf('week');
        var actual = moment().min(start).max(end).format();
        console.log(start.format(),end.format(),actual)
        for(let  i=0;i<7;i++){
            arr.unshift(moment().subtract(i, 'days').format('YYYY/M/D'))
        }
        let option = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: arr
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            };
        // 配置属性
        echartsInstance.setOption(option)
    }
}
export default ADmanage