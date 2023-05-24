import axios from "axios";
import { GET_FILMES } from "./constants";

const api = axios.create();

const apiGet = async (url,action, keyStore) => {
    if(keyStore){
        let dados = localStorage.getItem(keyStore)
        if(dados){
            action(JSON.parse(dados))
            return
        }
    }
    await api.get(url).then(res => {
        action(res.data)
        localStorage.setItem(keyStore, JSON.stringify(res.data))
    })
} 
export const  getListaFilmes = async (action) => {
    apiGet(GET_FILMES, action, 'filmes_key')
} 

export default api;