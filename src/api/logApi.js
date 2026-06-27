import api from "./api";


export const obtenerLogs = ()=>{

    return api.get("/Logs");

};