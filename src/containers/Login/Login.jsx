import React, { Component } from 'react'
import { Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import {connect} from 'react-redux'
import {saveUserInfo} from '../../redux/actions/login'
import {reqLogin} from '@/api'
import './css/login.less'
import logo from './imgs/logo.png'

const {Item} = Form

class Login extends Component {
  //表单提交且验证通过的回调
  onFinish = async values => {
    let result = await reqLogin(values)
    const {status,msg,data} = result
    if(status === 0){
      message.success('登陆成功',1)
      this.props.saveUserInfo(data)  //保存用户信息到redux中和localstorage中
      this.props.history.replace('/admin') //路由跳转页面
    }else{
      message.error(msg)
    }
  }
  //密码的验证器
  pwdValidator = (_,value='')=>{
    let errMsgArr = []
    if (!value.trim()) return Promise.reject('密码必须输入!')
    if (value.length <4) errMsgArr.push('密码长度至少四位')
    if (value.length >12) errMsgArr.push('密码长度最多12位')
    if (!/^\w+$/.test(value)) errMsgArr.push('密码必须是字母,数字或下划线组成')
    if (errMsgArr.length !== 0) return Promise.reject(errMsgArr)
    else return Promise.resolve()
  }
  render() {
    return (
      <div className='login'>
        <header>
          <img src={logo} alt="logo"/>
          <h1>商品管理系统</h1>
        </header>
        <section>
          <span className='title'>用户登录</span>
          <Form
            className="login-form"
            onFinish={this.onFinish}
          >
            <Item
              name="username"
              rules={[
                {required:true,message:'用户名必须输入'},
                {min:4,message:'用户名长度至少4位'},
                {max:12,message:'用户名长度最多12位'},
                {pattern:/^\w+$/,message:'用户名必须是字母,数字或下划线组成'}
              ]}
            >
              <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Username" 
              />
            </Item>
            <Item
              name="password"
              rules={[
                {validator:this.pwdValidator}
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}
export default connect(
  state => ({}),
  {saveUserInfo}
)(Login)
