//改文件是创建count的action对象
import {INCREMENT,DECREMENT} from '../action_types'

export const increment = value=> ({type:INCREMENT,data:value})
export const decrement = value=> ({type:DECREMENT,data:value})
