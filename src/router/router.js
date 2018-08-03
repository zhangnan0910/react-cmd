import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import { getCookie } from "@/utils/cookies";
// function getCookie(str){
//     return false
// }
class RouteView extends Component{
    render(){
        return(
            <Switch>
                {
                    this.props.routes.map((res,index)=>{
                        return <Route key={index} path={res.path} exact={res.exact || false} render={(e)=>{
                            // console.log(getCookie('login-token'))
                            // 判断不在login页时在获取token字段
                            if (res.path == '/login' || getCookie('login-token')){
                                return <res.component routes={res.children} {...e}/>
                            } else{
                                return <Redirect to='/login'></Redirect>
                            }
                            
                            
                        }}></Route>
                    })
                }
            </Switch>
        )
    }
}
export default RouteView