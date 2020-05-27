import SAVE_USERINFO from '../action_type.js'

export const saveUserInfo = userObj => {
  const {user,token} = userObj
  //向localstorage中保存用户信息,localstorage中保存的都是KEY VALUE 组合都是字符串
  localStorage.setItem('user',JSON.stringify(user))
  localStorage.setItem('token',token)
  return {type:SAVE_USERINFO,data:userObj}
}