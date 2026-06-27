import Layout from "../../components/Layout";
import "./FormularioTarea.css";


function NuevaTarea() {

    return (

        <Layout>

            <div className="formulario-container">

                <h1>
                    Nueva Tarea
                </h1>


                <form className="formulario-tarea">

                    <label>
                        Título
                    </label>

                    <input
                        type="text"
                        placeholder="Título"
                    />


                    <label>
                        Descripción
                    </label>

                    <textarea
                        placeholder="Descripción"
                    />


                    <label>
                        Estado
                    </label>

                    <select>

                        <option>Pendiente</option>

                        <option>En progreso</option>

                        <option>Completada</option>

                    </select>


                    <label>
                        Prioridad
                    </label>

                    <select>

                        <option>Alta</option>

                        <option>Media</option>

                        <option>Baja</option>

                    </select>


                    <button type="submit">
                        Guardar
                    </button>


                </form>


            </div>

        </Layout>

    );

}


export default NuevaTarea;