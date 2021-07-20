import axios from 'axios';
import { loginRequest } from '../services/auth.service'

const mutations = {
    auth_error(state, messange){
        console.log(messange);
        state.status = 403
        state.authError = messange
    },

    auth_success(state, messange, token){
        state.token = token
        state.status = messange;
        state.authError = ''
    }
}

const actions = {

    async login( { commit }, loginForm) {

        console.log(loginForm);
        const data = await loginRequest(loginForm);
        
        if(data){
            localStorage.setItem('token', data.token);
            console.log(localStorage.getItem('token'));
            axios.defaults.headers.common['Authorization'] = data.token;
            commit('auth_success', data.messange,  data.token);
        }

        if(data.error != null){
            commit('auth_error', data.error);
            localStorage.removeItem('token');
        }
    }
}

const getters = {
    isLoggedIn: state => !!state.token,
    authError: state => state.authError,
}

const state = () => ({
    status: '',
    token: localStorage.getItem('token') || '',
    authError: '',
    email: ''
})

export default {
    mutations,
    getters,
    actions,
    state,
}