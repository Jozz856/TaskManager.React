import api from "./api";


export const obtenerTareas = () => {

    return api.get("/Tareas");

};



export const crearTarea = (tarea) => {

    return api.post("/Tareas", tarea);

};



export const actualizarTarea = (id,tarea) => {

    return api.put(`/Tareas/${id}`, tarea);

};



export const eliminarTarea = (id) => {

    return api.delete(`/Tareas/${id}`);

};



export const filtrarTareas = (id, prioridadId) => {

    return api.get("/Tareas/Filtrar", {

        params:{
            id:id,
            prioridadId:prioridadId
        }

    });

};



export const obtenerEstados = () => {

    return api.get("/Catalogos/Estados");

};



export const obtenerPrioridades = () => {

    return api.get("/Catalogos/Prioridades");

};