//引入react核心库
import React, { Component } from 'react'
//引入connect方法
import {connect} from 'react-redux'
//引入action
import {addPersons} from '../redux/actions/person'
//引入uuid
import { v4 as uuidv4 } from 'uuid';

//person的UI组件
class Person extends Component {
  add = () =>{
    //获取输入框的值
    const {nameNode,ageNode} = this.refs
    //输入框内容不能为空
    if(!nameNode.value || !ageNode.value){
      alert('输入框内容不能为空~~~~')
      return
    }
    //添加人物信息
    this.props.addPersons({
      id:uuidv4(),
      name:nameNode.value,
      age:ageNode.value
    })
    //清空输入框内容
    nameNode.value = ''
    ageNode.value = ''
  }
  render() {
    const {persons,count} = this.props
    return (
      <div>
        <h2>当前总人数:{persons.length},上方求和数为:{count}</h2>
        <input ref='nameNode' type="text" placeholder="请输入姓名"/>&nbsp;
        <input ref='ageNode' type="text" placeholder="请输入年龄"/>&nbsp;
        <button onClick={this.add}>添加</button>
        <ul>
          {
            persons.map((personObj) =>{
            return <li key={personObj.id}>姓名:{personObj.name}---年龄:{personObj.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
//暴露person的容器组件
export default connect(
  state => (
    {
      persons:state.persons,
      count:state.number
    }
  ),
  {addPersons}
)(Person)