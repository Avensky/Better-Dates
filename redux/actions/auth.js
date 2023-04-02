// import * as actionTypes from './actionTypes';
// 
// import axios from 'axios';
// 
// export const registerUserStart = () => {
//     return {
//         type    : actionTypes.REGISTER_USER_START
//     }
// }
// 
// export const registerUserFail = (error) => {
//     console.log('resultData fail', error)
//     return {
//         type    : actionTypes.REGISTER_USER_FAIL,
//         error   : error
//     }
// }
// 
// export const registerUserSucces = (payload) => {
// //    console.log('register user', payload)
//     return {
//         type    : actionTypes.REGISTER_USER_SUCCESS,
//         payload : payload
//     }
// }
// 
// export const registerUser = (values) => {
//     return dispatch => {
//         dispatch(registerUserStart());
//         axios.post(`${actionTypes.BASE_URL}/api/signup`, values)
//             .then( res => {
//                 dispatch(registerUserSucces(res.data))
//             }).catch( err => {
//                 dispatch(registerUserFail(err))
//         })
//     }
// }
// 
// export const loginUserStart = () => {
//     console.log('loginUser started')
//     return {
//         type    : actionTypes.LOGIN_USER_START
//     }
// }
// 
// export const loginUserFail = (error) => {
//     console.log('resultData fail', error)
//     return {
//         type    : actionTypes.LOGIN_USER_FAIL,
//         error   : error
//     }
// }
// 
// export const loginUserSuccess = (payload) => {
//     //console.log('loginUser success', payload)
//     return {
//         type    : actionTypes.LOGIN_USER_SUCCESS,
//         payload : payload
//     }
// }
// 
// export const loginUser = (values) => {
//     return dispatch => {
//         dispatch(loginUserStart());
//         //console.log("start",values)        
//         const url = `${actionTypes.BASE_URL}/api/login`
//         axios.post(url, values)
//             .then(res => {
//                 dispatch(loginUserSuccess(res.data))
//             })
//             .catch( err => {
//                 dispatch(loginUserFail(err))
//             })
//     }
// }
// 
// export const fetchUserStart = () => {
//     console.log('fetchUserStart ')
//     return {
//         type: actionTypes.FETCH_USER_START,
//     }
// }
// 
// export const fetchUserSuccess = (payload) => {
//     //console.log('fetchUserSuccess ', payload)
//     return {
//         type: actionTypes.FETCH_USER_SUCCESS,
//         payload: payload,
//     }
// }
// 
// export const fetchUserFail = (error) => {
//     console.log('fetchUserFail ', error)
//     return {
//         type: actionTypes.FETCH_USER_FAIL,
//         error: error,
//     }
// }
// 
// export const fetchUser = () => {
//     
//     return dispatch => {
//         dispatch(fetchUserStart());
//         axios.get(`${actionTypes.BASE_URL}/api/fetchUser`)
//             .then( res => {
//                 dispatch(fetchUserSuccess(res.data))
//             })
//             .catch( err => {
//                 dispatch(fetchUserFail(err))
//             })
//     }
// }
// export const logoutStart = () => {
//     console.log('logout started')
//     return {
//         type: actionTypes.LOGOUT_START
//     }
// }
// 
// export const logoutSuccess = (payload) => {
//     console.log('logout success')
//     return {
//         type: actionTypes.LOGOUT_SUCCESS,
//         payload: payload
//     }
// }
// 
// export const logoutFail = (error) => {
//     console.log('logout fail', error)
//     return {
//         type: actionTypes.LOGOUT_FAIL,
//         error: error
//     }
// }
// export const logout = () => {
//     return dispatch => {
//         dispatch(logoutStart());
//         axios.get(`${actionTypes.BASE_URL}/api/logout`)
//             .then( res => {
//                 dispatch(logoutSuccess(res.data))
//             })
//             .catch( err => {
//                 dispatch(logoutFail(err))
//             })
//     }
// }