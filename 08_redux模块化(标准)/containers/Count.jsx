//引入react核心库
import React, { Component } from 'react'
//引入核心connect方法
import {connect} from 'react-redux'
//引入action
import {increment,decrement,incrementAsync} from '../redux/actions/count'

//count的UI组件
class Count extends Component {
  //加法回调
  increment = () =>{
    //获取select所选值
    const {value} = this.refs.user_selectd
    this.props.increment(value*1)
  }
  //减法回调
  decrement = () =>{
    //获取select所选值
    const {value} = this.refs.user_selectd
    this.props.decrement(value*1)
  }
  //求和为奇数回调
  incrementIfOdd = () =>{
    //获取select所选值
    const {value} = this.refs.user_selectd
    //获取原来的和
    const {count} = this.props
    if(count %2 ===1){
      this.props.increment(value*1)
    }
  }
  //异步回调
  incrementAsync = () =>{
    //1.获取select所选值
    const {value} = this.refs.user_selectd
    this.props.incrementAsync(value*1,2000)
  }
  render() {
    const {count,persons} = this.props
    return (
      <div>
        <h2>当前求和为:{count},下方总人数为:{persons}</h2>
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

//暴露了count的容器组件
export default connect(
  state => (   //映射state(总)
    {
      count:state.number,
      persons:state.persons.length
    }
  ),  
  /* 精简版
  dispatch =>
    ({
      increment:(value) =>{dispatch(increment(value))},
      decrement:(value) =>{dispatch(decrement(value))}
    })
  */
  {increment,decrement,incrementAsync}  //最终版  //映射操作state方法
  )  
  (Count)