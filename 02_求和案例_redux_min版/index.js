import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App />,document.getElementById('root'))

//如果redux中保存的状态有所改变，那么就会调用store.subscribe的回调函数
store.subscribe(()=>{
  ReactDOM.render(<App />,document.getElementById('root'))
})