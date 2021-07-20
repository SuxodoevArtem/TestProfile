import { getProfileRequest } from '../services/profile.service'

const mutations = {
    profile_error(state, messange){
        console.log(messange);
        state.status = 500
        state.profileError = messange
    },

    profileGet_success(state, data, messange){
        console.log(data)

        state.profile = data;
        state.status = messange;
    }
}

const actions = {

    async getProfile( { commit } ) {

        const { data , messange } = await getProfileRequest();

        if(data){
            console.log(data)
            commit('profileGet_success', data, messange);
        }

        if(data.error != null){
            commit('profile_error', data.error);
        }
    },

}

const getters = {
    profileError: state => state.profileError,
    Profile: state => state.profile,
}

const state = () => ({
    status: '',
    profileError: '',
    profile: {},
})

export default {
    mutations,
    getters,
    actions,
    state,
}