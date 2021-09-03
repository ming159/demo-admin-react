/*
 包含多个 reducer 函数， 根据旧的 state 和指定的 action 返回一个 新的 state
 */

 import { combineReducers } from 'redux'

 function XXX(state = 0, action) {
   return state
 }
 
 function YYY(state = 0, action) {
   return state
 }
 
 export default combineReducers({
   XXX,
   YYY
 })