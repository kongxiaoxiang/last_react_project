//改文件是引入redux核心 --- store
import {createStore,applyMiddleware} from 'redux'  //用于创建store applyMiddleware中间件
//引入总reducer
import allReducer from './reducers'
//引入redux-thunk 用于解决异步action
import thunk from 'redux-thunk'
//引入composeWithDevTools
import {composeWithDevTools} from 'redux-devtools-extension'


//创建store，并为其指定好相应的reducer，随后暴露
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))