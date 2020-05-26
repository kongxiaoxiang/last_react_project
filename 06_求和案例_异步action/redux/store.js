//改文件是引入redux核心 --- store
import {createStore,applyMiddleware} from 'redux'  //用于创建store applyMiddleware中间件
import countRedecer from './reducers/count' //引入对count服务的reducer
//引入redux-thunk 用于解决异步action
import thunk from 'redux-thunk'



//创建store，并为其指定好相应的reducer，随后暴露
export default createStore(countRedecer,applyMiddleware(thunk))