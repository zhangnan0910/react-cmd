import React, { Component, Fragment } from "react";
import http from "@/utils/http";
class ADmanage extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                'https://o5omsejde.qnssl.com/demo/test1.jpg',
                'https://o5omsejde.qnssl.com/demo/test2.jpg',
                'https://o5omsejde.qnssl.com/demo/test0.jpg',
                'https://o5omsejde.qnssl.com/demo/test4.jpg',
                'https://o5omsejde.qnssl.com/demo/test5.jpg',
                'https://o5omsejde.qnssl.com/demo/test6.jpg',
                'https://o5omsejde.qnssl.com/demo/test7.jpg',
                'https://o5omsejde.qnssl.com/demo/test8.jpg'
            ],
            box: {
                width: "300px",
                background: 'red',
                height: '600px',
                overflow: 'hidden',
                overflowY: 'scroll'
            },
            imgStyle: {
                width: '100%',
                height: '340px',
                display: 'block'
            }
        }
    }
    render() {
        let { box, list, imgStyle } = this.state
        return (
            <div>工具想</div>
            // <div style={box} onScroll={this.fnScroll.bind(this)}>
            //     {
            //         list && list.map((res, index) => {
            //             return <img style={imgStyle} key={index} src={res} alt="" />
            //         })
            //     }
            // </div>
        )
    }
    // fnScroll(e) {
    //     console.log(e.scrollTop)
    // }
    componentDidMount(){
        http.get("/dsp-report/index").then(res=>{
            console.log(res)
        })
    }
}
export default ADmanage