import React,{ Component } from "react";
import './index.css'
import { setCookie } from "@/utils/cookies";
class Login extends Component{
    constructor(){
        super()
        
        // this.state = {
        //     formData:{
        //         username:'',
        //         pwd:'',
        //         yzm:''
        //     }
        // }
        this.state = {
         
                username: '',
                pwd: '',
                yzm: ''
        }
    }
    render(){
        let { username,yzm,pwd} = this.state
        return (
        <div className='bg'>
            <div className="login-form">
                    <h3 className="account-landing"><span>账户登录</span></h3>
                    <div className="error-title">
                        <i className="error-icon"></i> 
                        <span className="error-title-text"></span>
                    </div>
                    <div className="form-wrap">
                        <p><input type="text" name='username' value={username} placeholder="用户名" onChange={this.handleChange.bind(this)}/></p>
                        <p><input type="password" name='pwd' value={pwd} placeholder="密码" onChange={this.handleChange.bind(this)}/></p>
                        <div className="vcode">
                            <input type="text" className="code-text" name='yzm' value={yzm} onChange={this.handleChange.bind(this)} placeholder="请输入验证码" />
                            {/* <div className="verify-code">
                                <img src="/dsp-admin/captcha.jpg" alt="请求验证码失败" title="点击更换验证码" />
                            </div> */}
                        </div>
                        <button className="up-login" type="button" onClick={this.clickFn.bind(this)}>登 录</button>
                       
                    </div>
                    <h2>©2018&nbsp;小船出海教育科技（北京）有限公司&nbsp;作业帮</h2>
            </div>
        </div>
        ) 
    }
    handleChange(e){
        // let {formData} = this.state
        let name = e.target.name
        // this.setState({
        //     formData:{
        //         [name]: e.target.value
        //     }
        // })
        this.setState({
             [name]: e.target.value
        })
    }
    clickFn(){
        for (let key in this.state){
            if (!this.state[key]){
                alert('请填写完整信息')
            }else{
                setCookie('login-token','/home/home')
                this.props.history.replace('/home/home')
                
            }
        }
    }
}
export default Login