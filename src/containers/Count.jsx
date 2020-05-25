//容器组件

//引入UI组件
import Count from '../components/Count'
//引入核心connect方法
import {connect} from 'react-redux'
//引入action
import {increment,decrement} from '../redux/actions/count'


export default connect(
  state => ({count:state}),
  /* 精简版
  dispatch =>
    ({
      increment:(value) =>{dispatch(increment(value))},
      decrement:(value) =>{dispatch(decrement(value))}
    })
  */
  {increment,decrement}  //最终版
  )  
  (Count)