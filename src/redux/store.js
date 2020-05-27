//引入createStore用于创建store
import {createStore,applyMiddleware} from 'redux'
//引入thunk 解决异步action
import thunk from 'redux-thunk'
//引入devtools 用于开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
//引入总reducer
import allReducer from './reducers'

export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))