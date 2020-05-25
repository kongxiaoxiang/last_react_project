import React, { Component } from 'react'
import store from '../redux/store'
import {createIncrementAction,createDecrementAction} from '../redux/count_action_creator'
import {INCREMENT,DECREMENT} from '../redux/action_types'


export default class Count extends Component {
  //加法回调
  increment = () =>{
    //获取select所选值
    const {value} = this.refs.user_selectd
    store.dispatch(createIncrementAction(value*1))
  }
  //减法回调
  decrement = () =>{
    //获取select所选值
    const {value} = this.refs.user_selectd
    store.dispatch(createDecrementAction(value*1))
  }
  //求和为奇数回调
  incrementIfOdd = () =>{
    //获取select所选值
    const {value} = this.refs.user_selectd
    //获取原来的和
    let count = store.getState()
    if(count %2 ===1){
      store.dispatch(createIncrementAction(value*1))
    }
  }
  //异步回调
  incrementAsync = () =>{
    //1.获取select所选值
    const {value} = this.refs.user_selectd
    setTimeout(() => {
      store.dispatch(createIncrementAction(value*1))
    }, 500);
  }
  render() {
    return (
      <div>
        <h2>当前求和为:{store.getState()}</h2>
        <select ref='user_selectd'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button> &nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
