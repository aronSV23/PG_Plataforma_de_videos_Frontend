import axios from "./axios.js"


export const registerRequest=(user)=>axios.post(`/user/register`,user)

export const loginRequest=(user)=>axios.post(`/user/login`,user)
 
export const verifyTokenRequest=()=>axios.get('/user/verify')

