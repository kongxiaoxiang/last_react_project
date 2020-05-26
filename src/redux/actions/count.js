//改文件是创建count的action对象
import {INCREMENT,DECREMENT} from '../action_types'

export const increment = value=> ({type:INCREMENT,data:value})
export const decrement = value=> ({type:DECREMENT,data:value})


/*
  1.有一种特殊的action，该action是一个函数
  2.会交给store
  3.store底层会做判断，立即调用该函数，并返回store.dispatch
*/
export const incrementAsync = (value,time) =>{
  return (dispatch) =>{
    setTimeout(() => {
      dispatch(increment(value))
    }, time);
  }
}