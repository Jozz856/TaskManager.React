import api from "./api";


export const login = async (datos) => {

    const response = await api.post("/Auth/login", datos);

    localStorage.setItem("token", response.data.token);

    return response;
};

export const register = (datos) => {

    return api.post("/Auth/register", datos);

};

export const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

};

export const guardarToken = (token) => {

    localStorage.setItem("token", token);

};

export const guardarUsuario = (usuario) => {

    localStorage.setItem("usuario", usuario);

};

export const obtenerToken = () => {

    return localStorage.getItem("token");

};

export const obtenerUsuario = () => {

    return localStorage.getItem("usuario");

};

export const estaAutenticado = () => {

    return obtenerToken() !== null;

};