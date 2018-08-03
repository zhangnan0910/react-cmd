import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
//import Home from "../page/home/index";
// 动态引入
//const Home = () => import("../page/home/index")
//import Plan from "../page/ADmanage/plan";
// import Unit from "../page/ADmanage/unit";
// import Creativity from "../page/ADmanage/creativity";
// import DtatCenter from '../page/dtatCenter/index'
// import HoldAll from '../page/Hold-all/index'
import Login from '../page/Login'
import Index from '../page/Home'
// 动态引入模块存在异步问题
class DynimicComp extends Component{
    constructor(){
        super()
        this.state = {
            Comp:null
        }
    }
    render(){
        let {Comp} = this.state
        if(!Comp){
            return <p>loading...</p>
        }else{
            return <Comp />
        } 
    }
    componentDidMount(){
        import(/*webpackChunkName:'动态文件名' */`../page${this.props.path}.jsx`).then(comp=>{
            this.setState({
                Comp:comp.default
            })
        })
    }
}
function HOC(path) {
    return class extends Component{
        render(){
            return <DynimicComp path={path}/>
        }
    }
}
const router = {
    routes: [
        {
            path:'/',
            exact:true,
            component: () => <Redirect from='/' to='/home/home'/>,
            
        },
        {
            path:'/login',
            exact: true,
            component:Login,
        },{
            path:'/home',
            component: Index,
            children:[
                {
                    path: '/home/home',
                    component: HOC("/home/index")
                },
                {
                    path: '/home/plan',
                    component: HOC("/ADmanage/plan")
                }, {
                    path: '/home/unit',
                    component: HOC("/ADmanage/unit")
                }, {
                    path: '/home/creativity',
                    component: HOC("/ADmanage/creativity")
                }, {
                    path: '/home/dtatCenter',
                    component: HOC("/dtatCenter/index")
                }, {
                    path: '/home/holdAll',
                    component: HOC("/Hold-all/index")
                }
            ]
        }

    ]
}
const routes = router.routes
export { routes}
export default router