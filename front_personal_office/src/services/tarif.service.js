import { request } from './generic.service';

const getTarifsRequest = data => request( {url: `tarif/getTarifs`, method: "get", data} )

const getUserTarifRequest = data => request( {url: `tarif/getUserTarif`, method: "get", data} )

export  { getTarifsRequest, getUserTarifRequest }