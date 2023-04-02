// import axios from 'axios';
// import * as actionTypes from './actionTypes';
// 
// /*******************************************
//  *Get Item
// *******************************************/
// export const getMemoriesStart = () => {
//     return{
//         type: actionTypes.GET_MEMORIES_START,
//     }
// }
// 
// export const getMemoriesFail = (error) => {
//     return {
//         type: actionTypes.GET_MEMORIES_FAIL,
//         error: error
//     }
// }
// 
// export const getMemoriesSuccess = (memories) => {
//     return {
//         type: actionTypes.GET_MEMORIES_SUCCESS,
//         memories: memories
//     }
// }
// 
// export const getMemories = () => {
//     return dispatch => {
//         dispatch(getMemoriesStart())
//         const url = `${actionTypes.BASE_URL}/api/getMemories`
//         axios.get(url)
//             .then(res => dispatch(getMemoriesSuccess(res.data)))
//             .catch(err => dispatch(getMemoriesFail(err)))
//     }
// }
// 
// /*******************************************
//  *Get Item by Id
// *******************************************/
// export const getMemoryStart = () => {
//     return{
//         type: actionTypes.GET_MEMORY_START,
//     }
// }
// 
// export const getMemoryFail = (error) => {
//     return {
//         type: actionTypes.GET_MEMORY_FAIL,
//         error: error
//     }
// }
// 
// export const getMemorySuccess = (memory) => {
//     //console.log('getMemorySuccess = ', memory)
//     return {
//         type: actionTypes.GET_MEMORY_SUCCESS,
//         memory: memory
//     }
// }
// 
// export const getMemory = (id) => {
//     console.log('getMemory id = ', id);
//     return dispatch => {
//         dispatch(getMemoryStart())
//         const url = `${actionTypes.BASE_URL}/api/getMemory/${id}`
//         axios.get(url)
//             .then(res => dispatch(getMemorySuccess(res.data)))
//             .catch(err => dispatch(getMemoryFail(err)))
//     }
// }
// 
// /*******************************************
//  * New Item
// *******************************************/
// export const addMemoryStart = () => {
//     console.log('addMemoryStart ')
//     return {
//         type: actionTypes.ADD_MEMORY_START,
//     }
// }
// 
// export const addMemorySuccess = (payload) => {
//     console.log('addMemorySuccess ',payload)
//     return {
//         type: actionTypes.ADD_MEMORY_SUCCESS,
//         payload: payload,
//     }
// }
// 
// export const addMemoryFail = (error) => {
//     console.log('addMemoryFail ',error)
//     return {
//         type: actionTypes.ADD_MEMORY_FAIL,
//         error: error
//     }
// }
// 
// export const addMemory = (values) => {
//     //console.log('addMemory ',values)
//     return dispatch  => {
//         dispatch(addMemoryStart());
//         //set route
//         const url           = `${actionTypes.BASE_URL}/api/addImage`
//         //format data so backend can read it
//         const formData      = new FormData();
//         var replaced        = values.title.split(' ').join('-')
//         let fileExtension = values.imageUri.substr(values.imageUri.lastIndexOf('.') + 1);
//         formData.append('memory', {
//             name    : replaced + '.' + fileExtension,
//             uri     : values.imageUri,
//             type    : 'image/jpg',
//         })
//         formData.append('title',    values.title)
//         formData.append('address',  values.address)
//         formData.append('lng',      JSON.stringify(values.lng))
//         formData.append('lat',      JSON.stringify(values.lat))
//    
//         // formData.append('title', values.title)
//         // formData.append('address', values.address)
//         // formData.append('lng', values.lng)
//         // formData.append('lat', values.lat)
//         
//         //set content type so backend can read it
//         const options = {
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'multipart/form-data',
//               },
//         }
//         axios.post(url, formData, options)
//             .then(res => {
//                 dispatch(addMemorySuccess(res.data))
//             })
//             .catch(err => dispatch(addMemoryFail(err)))
//     }
// }