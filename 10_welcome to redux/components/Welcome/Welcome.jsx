import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment} from '../../redux/actions/count'

class Welcome extends Component {
  add = () =>{
    this.props.increment(1)
  }
  render() {
    const {sum,persons} = this.props
    return (
      <div>
        <h1>Welcom to Redux! 求和数:{sum}---总人数:{persons}</h1>
        <button onClick={this.add}>加1</button>
      </div>
    )
  }
}

export default connect(  //映射总状态
  state =>({
    sum:state.number,
    persons:state.persons.length
  }),
  {increment}
  )(Welcome)
