//该文件是统一管理ajax请求
import ajax from './ajax'
//登录时请求  values形如 {}
export const reqLogin = values => ajax.post('/login',values)
