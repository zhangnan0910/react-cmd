import React, { Component, Fragment } from "react";
import Header from "../components/header";
import Aside from '../components/aside'
import RouteView from "../router/router";

class Index extends Component {
    render() {
        console.log(this.props.routes)
        return (
            <Fragment>
                <Header />
                <div className='content'>
                    <Aside />
                    <div className="main">
                        <RouteView routes={this.props.routes}/>    
                    </div>
                </div>
            </Fragment>
        )

    }
}
export default Index