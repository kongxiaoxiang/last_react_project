//该文件是为person创建的action对象

//引入常量
import {ADD_PERSONS} from '../action_types'
//创建添加一个人的action
export const addPersons = personObj =>({type:ADD_PERSONS,data:personObj})