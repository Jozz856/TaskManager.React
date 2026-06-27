import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authApi";

import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [nombreUsuario, setNombreUsuario] = useState("");
    const [password, setPassword] = useState("");

    const iniciarSesion = async (e) => {

        e.preventDefault();

        try {

            const response = await login({

                nombreUsuario,
                password

            });

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "usuario",
                nombreUsuario
            );

            navigate("/dashboard");

        }
        catch (error) {

            console.log(error);

            alert("Usuario o contraseña incorrectos");

        }

    };


    return (

        <div className="login-container">

            <div className="login-card">

                <h1>
                    Task Manager
                </h1>

                <p>
                    Iniciar sesión
                </p>

                <form onSubmit={iniciarSesion}>


                    <div className="form-group">

                        <label>

                            Usuario

                        </label>

                        <input

                            type="text"

                            value={nombreUsuario}

                            onChange={(e) =>
                                setNombreUsuario(
                                    e.target.value
                                )
                            }

                            placeholder="Usuario"

                            required

                        />

                    </div>




                    <div className="form-group">

                        <label>

                            Contraseña

                        </label>

                        <input

                            type="password"

                            value={password}

                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }

                            placeholder="Contraseña"

                            required

                        />

                    </div>




                    <button
                        className="btn-login"
                        type="submit">

                        Ingresar

                    </button>


                </form>

            </div>

        </div>

    );

}

export default Login;