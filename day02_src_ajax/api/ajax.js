/*
  改文件是:
    1.统一处理json编码格式转化为urlencoded
    2.统一处理返回的真正数据data,而不是包装的对象response
    3.统一设置请求基本路径
    4.设置超时时间
    5.统一用响应拦截器处理错误
*/
import axios from 'axios'  //axios核心库
import qs from 'querystring'  //处理json转为urlencoded
import {message as msg} from 'antd'

//设置请求基本路径
// axios.defaults.baseURL = 'http://localhost:5000'
//设置超时时间
axios.defaults.timeout = 2000

//请求拦截器
axios.interceptors.request.use((config) =>{
  const {method,data} = config
  if(method.toLowerCase() === 'post' && data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})

//响应拦截器
axios.interceptors.response.use(
  //成功的回调: 状态码以2开头
  response => {
    return response.data
  },
  //失败的回调:1.状态码不是以2开头 2.网络不通  3.超时
  err => {
    let errmsg = '未知错误，请联系管理员'
    const {message} = err
    if(message.indexOf('401') !== -1) errmsg = '未登录或身份过期,请重新登录!'
    else if(message.indexOf('Network Error') !== -1) errmsg = '网络错误,请检查网络链接!'
    else if(message.indexOf('timeout') !== -1) errmsg = '请求超时!'
    msg.error(errmsg,1)
    return new Promise(()=>{})
  }
)

export default axios