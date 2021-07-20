import { request } from './generic.service';

const loginRequest = data => request( {url: `auth/login`, method: "post", data} )

export  { loginRequest }
