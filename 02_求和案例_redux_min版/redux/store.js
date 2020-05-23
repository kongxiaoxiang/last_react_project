//改文件是引入redux核心 --- store
import {createStore} from 'redux'  //用于创建store
import countRedecer from './count_reducer.js' //引入对count服务的reducer
//创建store，并为其指定好相应的reducer，随后暴露
export default createStore(countRedecer)