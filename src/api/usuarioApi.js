import api from "./api";


// LISTAR
export const obtenerUsuarios = () => {

    return api.get("/Auth/usuarios");

};




// CREAR
export const crearUsuario = (usuario) => {

    return api.post("/Auth/register", usuario);

};




// EDITAR
export const actualizarUsuario = (id, usuario) => {

    return api.put(`/Auth/usuarios/${id}`, usuario);

};




// ELIMINAR
export const eliminarUsuario = (id) => {

    return api.delete(`/Auth/usuarios/${id}`);

};