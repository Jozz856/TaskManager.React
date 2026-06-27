import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import "./ListaTareas.css";

import {
    obtenerTareas,
    eliminarTarea,
    crearTarea,
    actualizarTarea,
    filtrarTareas,
    obtenerEstados,
    obtenerPrioridades
} from "../../api/tareaApi";



function ListaTareas() {


    const navigate = useNavigate();



    const [tareas,setTareas] = useState([]);

    const [estados,setEstados] = useState([]);

    const [prioridades,setPrioridades] = useState([]);



    const [editando,setEditando] = useState(false);



    const [filtroEstado,setFiltroEstado] = useState("");

    const [filtroPrioridad,setFiltroPrioridad] = useState("");




    const [tareaActual,setTareaActual] = useState({

        id:null,

        titulo:"",

        descripcion:"",

        estadoId:1,

        prioridadId:1

    });








    useEffect(()=>{

        cargarTareas();

        cargarCatalogos();

    },[]);








    const cargarTareas = async()=>{


        try{


            const response = await obtenerTareas();


            setTareas(response.data);


        }
        catch(error){

            console.log(error);

        }


    };









    const cargarCatalogos = async()=>{


        try{


            const estados =
                await obtenerEstados();


            const prioridades =
                await obtenerPrioridades();



            setEstados(estados.data);


            setPrioridades(prioridades.data);


        }
        catch(error){

            console.log(error);

        }


    };









    const buscar = async()=>{


        try{


            if(!filtroEstado && !filtroPrioridad)
            {

                cargarTareas();

                return;

            }




            const response =
                await filtrarTareas(

                    filtroEstado || null,

                    filtroPrioridad || null

                );



            setTareas(response.data);


        }
        catch(error){

            console.log(error);

        }


    };









    const guardar = async()=>{


        try{


            const datos = {


                titulo:tareaActual.titulo,


                descripcion:tareaActual.descripcion,


                estadoId:Number(tareaActual.estadoId),


                prioridadId:Number(tareaActual.prioridadId)


            };



            console.log("ENVIANDO:",datos);





            if(tareaActual.id)
            {


                await actualizarTarea(

                    tareaActual.id,

                    datos

                );


            }
            else
            {


                await crearTarea(datos);


            }




            limpiar();


            setEditando(false);


            cargarTareas();



        }
        catch(error){


            console.log(
                "ERROR API:",
                error.response?.data
            );


        }


    };









    const editar = (tarea)=>{


        setTareaActual({

            id:tarea.id,

            titulo:tarea.titulo,

            descripcion:tarea.descripcion,

            estadoId:tarea.estadoId ?? 1,

            prioridadId:tarea.prioridadId ?? 1

        });



        setEditando(true);


    };









    const eliminar = async(id)=>{


        try{


            await eliminarTarea(id);


            cargarTareas();


        }
        catch(error){

            console.log(error);

        }


    };









    const limpiar = ()=>{


        setTareaActual({

            id:null,

            titulo:"",

            descripcion:"",

            estadoId:1,

            prioridadId:1

        });


    };









    return (

        <Layout>


            <div className="lista-container">





                <div className="titulo-container">


                    <h1>
                        Lista de tareas
                    </h1>




                    <button

                    onClick={()=>navigate("/dashboard")}

                    >

                        Regresar Dashboard

                    </button>


                </div>









                <div className="filtros">



                    <select

                    value={filtroEstado}

                    onChange={
                        e=>setFiltroEstado(e.target.value)
                    }

                    >


                        <option value="">
                            Todos los estados
                        </option>



                        {
                            estados.map(e=>(


                                <option

                                key={e.id}

                                value={e.id}

                                >

                                    {e.nombre}

                                </option>


                            ))
                        }



                    </select>









                    <select


                    value={filtroPrioridad}


                    onChange={
                        e=>setFiltroPrioridad(e.target.value)
                    }


                    >


                        <option value="">
                            Todas las prioridades
                        </option>



                        {
                            prioridades.map(p=>(


                                <option

                                key={p.id}

                                value={p.id}

                                >

                                    {p.nombre}

                                </option>


                            ))
                        }


                    </select>







                    <button onClick={buscar}>

                        Buscar

                    </button>







                    <button

                    onClick={()=>{


                        limpiar();


                        setEditando(true);


                    }}

                    >


                        Nueva tarea


                    </button>



                </div>









                <table>


                    <thead>


                        <tr>


                            <th>
                                Título
                            </th>


                            <th>
                                Descripción
                            </th>


                            <th>
                                Estado
                            </th>


                            <th>
                                Prioridad
                            </th>


                            <th>
                                Acciones
                            </th>


                        </tr>


                    </thead>







                    <tbody>



                    {


                    tareas.map(t=>(


                        <tr key={t.id}>


                            <td>

                                {t.titulo}

                            </td>



                            <td>

                                {t.descripcion}

                            </td>



                            <td>

                                {t.estado}

                            </td>



                            <td>

                                {t.prioridad}

                            </td>



                            <td>


                                <button

                                onClick={()=>editar(t)}

                                >

                                    Editar

                                </button>





                                <button

                                onClick={()=>eliminar(t.id)}

                                >

                                    Eliminar

                                </button>


                            </td>



                        </tr>


                    ))


                    }



                    </tbody>



                </table>












                {


                editando &&



                <div className="formulario-tarea">


                    <h2>


                        {

                        tareaActual.id

                        ?

                        "Editar tarea"

                        :

                        "Nueva tarea"


                        }


                    </h2>









                    <input


                    placeholder="Título"


                    value={tareaActual.titulo}


                    onChange={e=>

                        setTareaActual({

                            ...tareaActual,

                            titulo:e.target.value

                        })


                    }


                    />









                    <textarea


                    placeholder="Descripción"


                    value={tareaActual.descripcion}


                    onChange={e=>

                        setTareaActual({

                            ...tareaActual,

                            descripcion:e.target.value

                        })


                    }


                    />









                    <select


                    value={tareaActual.estadoId}


                    onChange={e=>

                        setTareaActual({

                            ...tareaActual,

                            estadoId:e.target.value

                        })


                    }


                    >



                    {


                    estados.map(e=>(


                        <option

                        key={e.id}

                        value={e.id}

                        >


                            {e.nombre}


                        </option>


                    ))


                    }



                    </select>









                    <select


                    value={tareaActual.prioridadId}


                    onChange={e=>

                        setTareaActual({

                            ...tareaActual,

                            prioridadId:e.target.value

                        })


                    }


                    >



                    {


                    prioridades.map(p=>(


                        <option

                        key={p.id}

                        value={p.id}

                        >


                            {p.nombre}


                        </option>


                    ))


                    }



                    </select>









                    <button

                    onClick={guardar}

                    >

                        Guardar

                    </button>







                    <button


                    onClick={()=>{


                        limpiar();


                        setEditando(false);


                    }}


                    >


                        Cancelar


                    </button>



                </div>



                }



            </div>



        </Layout>


    );

}


export default ListaTareas;