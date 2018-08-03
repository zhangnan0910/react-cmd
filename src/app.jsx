import React, { Component, Fragment } from "react"
import { HashRouter ,Switch,Route} from "react-router-dom";
import {routes} from '../src/router/config'
import RouteView from "../src/router/router";

import './app.css'
class App extends Component {
 
    render() {
        return (
            <HashRouter>
                <RouteView routes={routes}/>
            </HashRouter>
        )

    }
}
export default App