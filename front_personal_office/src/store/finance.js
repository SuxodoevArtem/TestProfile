import { getBalanceRequest, UpdateBalanceRequest, getPaymentsRequest } from '../services/finance.service'

const mutations = {
    finance_error(state, messange){
        console.log(messange);
        state.status = 500
        state.financeError = messange
    },

    balance_success(state, data, messange){
        console.log(data)

        state.balance = data;
        state.status = messange;
    },

    payments_success(state, data, messange){
        console.log(data)

        state.payments = data;
        state.status = messange;
    }
}

const actions = {

    async getBalance( { commit } ) {

        const { data , messange } = await getBalanceRequest();
        console.log(data)
        if(data){
            console.log(data)
            commit('balance_success', data, messange);
        }

        if(data.error != null){
            commit('finance_error', data.error);
        }
    },

    async getPayments( { commit } ) {

        const { data , messange } = await getPaymentsRequest();
        console.log(data)
        if(data){
            console.log(data)
            commit('payments_success', data, messange);
        }

        if(data.error != null){
            commit('finance_error', data.error);
        }
    },

    async updateBalance( { commit }, amount) {

        const { data , messange } = await UpdateBalanceRequest(amount);
        console.log(data)
        if(data){
            console.log(data)
            commit('balance_success', data, messange);
        }

        if(data.error != null){
            commit('finance_error', data.error);
        }
    },

}

const getters = {
    financeError: state => state.authError,
    Balance: state => state.balance,
    Payments: state => state.payments
}

const state = () => ({
    status: '',
    financeError: '',
    balance: '',
    payments: [],
})

export default {
    mutations,
    getters,
    actions,
    state,
}