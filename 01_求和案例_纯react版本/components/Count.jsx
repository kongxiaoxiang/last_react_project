import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    count:0
  }
  //加法回调
  increment = () =>{
    //1.获取select所选值
    const {value} = this.refs.user_selectd
    //2.获取原来的和
    let {count} = this.state
    //3.加法运算
    count += value*1
    //4.更新状态
    this.setState({count})
  }
  //减法回调
  decrement = () =>{
    //1.获取select所选值
    const {value} = this.refs.user_selectd
    //2.获取原来的和
    let {count} = this.state
    //3.减法运算
    count -=value*1 
    //4.更新状态
    this.setState({count})
  }
  //求和为奇数回调
  incrementIfOdd = () =>{
    //1.获取select所选值
    const {value} = this.refs.user_selectd
    //2.获取原来的和
    let {count} = this.state
    //3.判断
    if(count %2 ===1){
      count +=value*1
    }
    //4.更新状态
    this.setState({count})
  }
  //异步回调
  incrementAsync = () =>{
    //1.获取select所选值
    const {value} = this.refs.user_selectd
    //2.获取原来的和
    let {count} = this.state
    //3.加法运算
    count +=value*1 
    //4.状态更新
    setTimeout(() => {
      this.setState({count})
    }, 500);
  }
  render() {
    return (
      <div>
        <h2>当前求和为:{this.state.count}</h2>
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
