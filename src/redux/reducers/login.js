import {SAVE_USERINFO} from '../action_type'

let initState = {user:{},token:''}

export default function (preState=initState,action) {
  const {type,data} = action
  let newState
  switch (type) {
    case SAVE_USERINFO:
      newState = [...data]
      return newState
  
    default:
      return preState
  }
}