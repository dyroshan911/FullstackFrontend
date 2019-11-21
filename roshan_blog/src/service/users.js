import { get, post, put, del } from './index';

const ENTITY = '/api/user';

function signin(data) {
    return post(`${ENTITY}/signin`, data);
}

function signup(data) {
    return post(`${ENTITY}/signup`, data);
}

function signout() {
    return get(`${ENTITY}/signout`);
}

function index() {
    return get(ENTITY);
}

export default {
    signin,
    signup,
    signout,
    index
}