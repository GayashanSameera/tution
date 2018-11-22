import axios from "axios";
import qs from 'qs';
// import { forceLogout } from './actions';

const API_URL = "http://localhost:9000";

const authAxios = axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

// const gatewayAxios = axios.create({
//     baseURL: API_URL,
//     headers:{
//         'Content-type': 'application/json'
//     }
// });

// const uploadAxios = axios.create({
//     baseURL: API_URL,
//     headers:{
//         'Content-Type': 'multipart/form-data'
//     }
// });

authAxios.interceptors.request.use((request)=>{
    try {
        console.log("request==============>>>>>>",request)
        if (request.data && request.headers['Content-Type'] === 'application/x-www-form-urlencoded'){
            request.data = qs.stringify(request.data);
            console.log("equest.data==============>>>>>>",request.data)
        }
        return request;
    } catch (error) {
        console.log("error==============>>>>>>",error)
    }
});


// gatewayAxios.interceptors.response.use(function (response) {
//     return response;
//   }, function (error) {
//     const { response: { status } } = error;

//     if (status === 498 || status === 401 || status === 403) {
//       forceLogout()
//     }
//     return Promise.reject(error);
// });

// uploadAxios.interceptors.response.use(function (response) {
//     return response;
//   }, function (error) {
//     const { response: { status } } = error;

//     if (status === 498 || status === 401 || status === 403) {
//       forceLogout()
//     }
//     return Promise.reject(error);
// });

export { authAxios};