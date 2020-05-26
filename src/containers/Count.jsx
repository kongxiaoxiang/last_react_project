//容器组件

//引入UI组件
import Count from '../components/Count'
//引入核心connect方法
import {connect} from 'react-redux'
//引入action
import {increment,decrement,incrementAsync} from '../redux/actions/count'


export default connect(
  state => ({count:state.number}),   //映射state(总)
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