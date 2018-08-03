import React from 'react'
import ReactDom  from 'react-dom'
import {Provider} from 'react-redux'
console.log(Provider)
// import Highcharts from 'highcharts'
import './common/css/style'
import App from './app.jsx'
import "antd/dist/antd.css"
import './index'
import store from './store/index'
ReactDom.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app')
)