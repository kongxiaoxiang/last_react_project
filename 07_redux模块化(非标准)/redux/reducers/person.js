//action形如{type:xxxx,data:xxxx}
//该函数是为person服务的reducer
import {ADD_PERSONS} from '../action_types'

let initState = [
  {id:'001',name:'xiaokong',age:18},
  {id:'002',name:'xiaozhang',age:18}
]

export default function (preState=initState,action) {
  let newState
  const {type,data} = action
  switch (type) {
    case ADD_PERSONS:
      newState = [data,...preState]
      return newState
      break;
  
    default: //初始化
      return preState
  }
}
