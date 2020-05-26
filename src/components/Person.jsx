import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class Person extends Component {
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
    return (
      <div>
        <h2>当前总人数:{this.props.persons.length}</h2>
        <input ref='nameNode' type="text" placeholder="请输入姓名"/>&nbsp;
        <input ref='ageNode' type="text" placeholder="请输入年龄"/>&nbsp;
        <button onClick={this.add}>添加</button>
        <ul>
          {
            this.props.persons.map((personObj) =>{
            return <li key={personObj.id}>姓名:{personObj.name}---年龄:{personObj.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
