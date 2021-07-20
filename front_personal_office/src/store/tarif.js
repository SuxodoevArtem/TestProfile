import { getTarifsRequest, getUserTarifRequest } from '../services/tarif.service'

const mutations = {
    tarifs_error(state, messange){
        console.log(messange);
        state.status = 500
        state.financeError = messange
    },

    tarifs_success(state, data, messange){
        console.log(data)

        state.tarifs = data;
        state.status = messange;
    },

    tarifUser_success(state, data, messange){
        console.log(data)

        state.tarifUser = data;
        state.status = messange;
    }
}

const actions = {

    async getTarifs( { commit } ) {

        const { data , messange } = await getTarifsRequest();
        console.log(data)
        if(data){
            console.log(data)
            commit('tarifs_success', data, messange);
        }

        if(data.error != null){
            commit('tarifs_error', data.error);
        }
    },

    async getUserTarif( { commit },) {

        const { data , messange } = await getUserTarifRequest();
        console.log(data[0])

        if(data){
            commit('tarifUser_success', data[0], messange);
        }

        if(data.error != null){
            commit('tarifs_error', data.error);
        }
    },

}

const getters = {
    tarifError: state => state.tarifError,
    Tarifs: state => state.tarifs,
    TarifUser: state => state.tarifUser,
}

const state = () => ({
    status: '',
    tarifError: '',
    tarifs: [],
    tarifUser: {}
})

export default {
    mutations,
    getters,
    actions,
    state,
}