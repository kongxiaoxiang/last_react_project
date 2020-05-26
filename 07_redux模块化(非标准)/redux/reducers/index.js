//该文件是汇总所有reducer,最终生成一个总reducer


//引入为count服务的reducer
import countReducer from './count'
//引入为person服务的reducer
import personReducer from './person'
//引入汇总的combineReducers
import {combineReducers} from 'redux'

//combineReducers是一个函数,传入一个对象(总状态state),返回值是一个总reducer
export default combineReducers(
  {
    number:countReducer,
    persons:personReducer
  }
)