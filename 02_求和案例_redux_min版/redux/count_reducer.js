//action形如{type:xxxx,data:xxxx}
//该函数是为count服务的reducer

let initState = 0
export default function (preState=initState,action) {
  const {type,data} = action
  let newState
  switch (type) {
    case 'increment':
      //action类型为increment
      newState = preState + data
      return newState
    case 'decrement':
      //action类型为decrement
      newState = preState - data
      return newState
    default: //初始化
      return preState
  }
}