// import * as actionTypes from '../actions/actionTypes';
// import {updateObject} from '../../utility/utility'
// const initialState = {
//     user    : null,
//     errors  : null,
//     payload : null, 
//     loading : false,
//     message : null,
//     authErrors : null,
// }
// const registerUserSuccess = (state, action) => {
//     console.log('register success payload: ', action.payload)
// 
//     let user=null
//     let message=null
//     action.payload.local || action.payload.facebook 
//     || action.payload.google || action.payload.twitter
//         ? user = action.payload
//         : message = action.payload
//     
//     return updateObject( state, {
//         loading: false,
//         user: user,
//         authErrors: message
//     })
// }
// 
// const registerUserFail = (state, action) => {
//     return updateObject( state, {
//         loading: false,
//         errors: action.errors
//     })
// }
// 
// const registerUserStart = (state, action) => {
//     return updateObject( state, {
//         loading: true,
//         errors: false,
//         message: 'Registering user...'
//     })
// }
// 
// const loginStart = (state, action) => {
//     return updateObject( state, {
//         errors: null,
//         loading: true,
//         message: 'Loggin in...'
//     })
// }
// const loginSuccess = (state, action) => {
//     let user=null
//     let error=null
//     action.payload.local || action.payload.facebook 
//     || action.payload.google || action.payload.twitter
//         ? user = action.payload
//         : error = action.payload
// 
//         //console.log('erroras')
//     return updateObject( state, {
//         user: user,
//         //userId: action.userId,
//         errors: null,
//         loading: false,
//         authErrors: error
//     })
// }
// 
// const loginFail =(state, action)=>{
//     //console.log('error', action.error)
//     return updateObject(state, {
//         errors: action.error,
//         loading: false,
//         message: null
//     })
// }
// 
// 
// 
// const fetchUserStart = (state, action) => {
//     return updateObject( state, {
//         errors: null,
//         loading: true,
//         user: null,
//     })
// }
// 
// const fetchUserSuccess = (state, action) => {
//     let user=null
//     let message=null
//     action.payload.local || action.payload.facebook 
//     || action.payload.google || action.payload.twitter
//         ? user = action.payload
//         : message = action.payload
// 
//     return updateObject( state, {
//         user: user,
//         loading: false,
//         authErrors: message,
//     })
// }
// 
// const fetchUserFail = (state, action) => {
//     console.log('fetchUserFail: ', action.error)
//     return updateObject( state, {
//         errors: action.error,
//         loading: false
//     })
// }
// 
// const logoutStart = (state, action) => {
//     return updateObject( state, {
//         errors: false,
//         loading: true,
//         message: 'Logging out!'
//     })
// }
// 
// const logoutSuccess = (state, action) => {
//     return updateObject( state, {
//         user: null,
//         loading: false,
//         message: null
//     })
// }
// 
// const logoutFail = (state, action) => {
//     return updateObject( state, {
//         loading: false,
//         errors: action.error,
//         message: null
//     })
// } 
// 
// const reducer = (state = initialState, action) =>{
// 
//     switch(action.type) {
//         case actionTypes.REGISTER_USER_SUCCESS  : return registerUserSuccess(state, action)
//         case actionTypes.REGISTER_USER_FAIL     : return registerUserFail(state, action)
//         case actionTypes.REGISTER_USER_START    : return registerUserStart(state, action)
// 
//         case actionTypes.LOGIN_USER_SUCCESS     : return loginSuccess(state, action)
//         case actionTypes.LOGIN_USER_START       : return loginStart(state, action)
//         case actionTypes.LOGIN_USER_FAIL        : return loginFail(state, action)
//         
//         case actionTypes.FETCH_USER_START       : return fetchUserStart(state, action)
//         case actionTypes.FETCH_USER_SUCCESS     : return fetchUserSuccess(state,action)
//         case actionTypes.FETCH_USER_FAIL        : return fetchUserFail(state,action)
// 
//         case actionTypes.LOGOUT_START           : return logoutStart(state,action)
//         case actionTypes.LOGOUT_SUCCESS         : return logoutSuccess(state,action)
//         case actionTypes.LOGOUT_FAIL            : return logoutFail(state, action)
//         
//         default: return state
//     }
// }
// 
// export default reducer