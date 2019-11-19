import axios from 'axios';

const  baseURL = "http://127.0.0.1:7001";
// const  baseURL = "http://jsonplaceholder.typicode.com";

const config = {
    baseURL,
    timeout: 8000,
    withCredentials: true //跨域请求时携带cookie
}

export function get(url) {
    return axios({
        ...config,
        method: 'get',
        url
    }).then(res => res.data);
}

export function post(url, data) {
    return axios({
        ...config,
        method: 'post',
        url,
        data
    }).then(res => res.data);
}

export function put(url, data) {
    return axios({
        ...config,
        data,
        method: 'put',
        url
    }).then(res => res.data);
}

export function del(url, data) {
    return axios({
        ...config,
        method: 'delete',
        url,
        data
    }).then(res => res.data);
}
