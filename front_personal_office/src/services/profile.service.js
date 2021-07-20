import { request } from './generic.service';

const getProfileRequest = data => request( {url: `profile/getProfile`, method: "get", data} )

const selectTarifRequest = data => request( {url: `profile/selectTarif`, method: "put", data} )

export  { getProfileRequest, selectTarifRequest }
