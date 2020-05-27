//汇总所有reducer
import {combineReducers} from 'redux'
//引入为login服务的reducer
import loginReducer from './login'

export default combineReducers({
  userInfo:loginReducer
})