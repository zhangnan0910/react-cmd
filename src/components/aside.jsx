import React,{ Component } from "react";
import { Menu, Icon } from 'antd'
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu
class Aside extends Component{
    constructor() {
        super()
        this.state = {
            collapsed: false,
            flag:false
        }
    }
    toggleCollapsed(){
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    toggleClass(){
        this.setState({
            flag: !this.state.flag
        });
    }
    render(){
        //console.log(this.state.flag)
        return (
        // <ul className='aside'>
        //     <li><Link to='/'>首页概览</Link></li>
        //     <li className={this.state.flag ? 'show' : ''} onClick={this.toggleClass.bind(this)}>广告管理
        //         <ol>
        //             <li><Link to='/plan'>广告计划</Link></li>
        //             <li><Link to='/unit'>广告单元</Link></li>
        //             <li><Link to='/creativity'>广告创意</Link></li>
        //         </ol>
        //         <span>&gt;</span>
        //     </li>
        //     <li>数据中心</li>
        //     <li>工具箱</li>
        // </ul>
         <aside style={{ width: 242 }}>
          
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
            >
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="pie-chart" />
                    <span><Link to='/home/home'>首页概览</Link></span>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>广告管理</span></span>}>
                    <Menu.Item key="5"> <Link to='/home/plan'>广告计划</Link></Menu.Item>
                    <Menu.Item key="6"><Link to='/home/unit'>广告单元</Link></Menu.Item>
                    <Menu.Item key="7"><Link to='/home/creativity'>广告创意</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="3">
                    <Icon type="pie-chart" />
                    <span><Link to='/home/dtatCenter'>数据中心</Link></span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="pie-chart" />
                    <span><Link to='/home/holdAll'>工具箱</Link></span>
                </Menu.Item>
            </Menu>
        </aside>
        )
    }
}
export default Aside