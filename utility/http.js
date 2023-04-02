// import axios from 'axios';
// const BASE_URL = 'http://192.168.100.7:5000';
// 
// export const loginUser = async (values) => {
//     const {fullName, email, password} = values;
//     const result = await fetch(`${BASE_URL}/api/users/login`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             fullName,
//             email,
//             password
//         })
//     })
// 
//     const resultData = await result.json()
// 
//     return resultData
// }