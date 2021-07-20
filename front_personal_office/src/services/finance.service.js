import { request } from './generic.service';

const getBalanceRequest = data => request( {url: `finance/getBalance`, method: "get", data} )

const getPaymentsRequest = data => request( {url: `finance/getPayments`, method: "get", data} )

const UpdateBalanceRequest = data => request( {url: `finance/UpdateBalance`, method: "put", data} )

export  { getBalanceRequest, UpdateBalanceRequest, getPaymentsRequest }
