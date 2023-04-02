// import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../../utility/utility';
// 
// const initialState = {
//     user        : null,
//     payload     : null,
//     loading     : false,
//     errors      : null,
//     memory      : null,
//     memories    : [],
// }
// 
// /************************************************************
//  * Add memory
// ************************************************************/
// export const addMemoryStart = (state, action) => {
//     return updateObject(state,{
//         loading: true
//     })
// }
// 
// export const addMemoryFail = (state, action) => {
//     return updateObject(state,{
//         loading: false,
//         errors: action.error
//     })
// }
// 
// export const addMemorySuccess = (state, action) => {
//     const memories = [...state.memories]
//     //console.log('reducer addMemorySuccess memories = ', memories)
//     const count = memories.push(action.payload)
//     //console.log('reducer addMemorySuccess payload = ', memories )
//     return updateObject(state,{
//         loading: false,
//         payload: action.payload,
//         memories: memories
//     })
// }
// 
// /************************************************************
//  * Get memory by Id
// ************************************************************/
// export const getMemoryStart = (state, action) => {
//     return updateObject(state,{
//         loading: true
//     })
// }
// 
// export const getMemoryFail = (state, action) => {
//     return updateObject(state,{
//         loading: false,
//         errors: action.error
//     })
// }
// 
// export const getMemorySuccess = (state, action) => {
//     const memory = action.memory
//     //console.log('reducer getMemorySuccess = ', memory)
//     return updateObject(state,{
//         loading: false,
//         memory: action.memory
//     })
// }
// 
// /************************************************************
//  * Get all memories
// ************************************************************/
// export const getMemoriesStart = (state, action) => {
//     return updateObject(state, {
//         loading: true
//     })
// }
// 
// export const getMemoriesFail = (state, action) => {
//     return updateObject(state, {
//         loading: false,
//         errors: action.error
//     })
// }
// 
// export const getMemoriesSuccess = (state, action) => {
// //    console.log('getMemoriesSuccess ', action.memories)
//     return updateObject(state, {
//         loading: false,
//         memories: action.memories
//     })
// }
// 
// export const reducer = (state = initialState, action) =>{
//     switch (action.type) {
//         
//         case actionTypes.ADD_MEMORY_START       : return addMemoryStart(state, action);
//         case actionTypes.ADD_MEMORY_FAIL        : return addMemoryFail(state, action);
//         case actionTypes.ADD_MEMORY_SUCCESS     : return addMemorySuccess(state, action)
// 
//         case actionTypes.GET_MEMORY_START       : return getMemoryStart(state, action);
//         case actionTypes.GET_MEMORY_FAIL        : return getMemoryFail(state, action);
//         case actionTypes.GET_MEMORY_SUCCESS     : return getMemorySuccess(state, action)
//         
//         case actionTypes.GET_MEMORIES_START     : return getMemoriesStart(state, action);
//         case actionTypes.GET_MEMORIES_FAIL      : return getMemoriesFail(state, action);
//         case actionTypes.GET_MEMORIES_SUCCESS   : return getMemoriesSuccess(state, action)
//         
//         default: return state
//     }
// }
// export default reducer