import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { obtenerLogs } from "../../api/logApi";
import { useNavigate } from "react-router-dom";
import "./Logs.css";


function Logs()
{

    const [logs,setLogs] = useState([]);

    const navigate = useNavigate();



    useEffect(()=>{

        cargar();

    },[]);




    const cargar = async()=>{

        try{

            const response = await obtenerLogs();

            setLogs(response.data);

        }
        catch(error){

            console.log(error);

        }

    };





    return (

        <Layout>


            <div className="logs-container">



                <div className="logs-header">


                    <h1>
                        📋 Historial de movimientos
                    </h1>



                    <button

                    className="btn-dashboard"

                    onClick={()=>navigate("/dashboard")}

                    >

                        🏠 Regresar al Dashboard

                    </button>


                </div>





                <table className="logs-table">


                    <thead>

                        <tr>


                            <th>
                                Fecha
                            </th>


                            <th>
                                Usuario
                            </th>


                            <th>
                                Acción
                            </th>


                            <th>
                                Tarea
                            </th>


                            <th>
                                Detalle
                            </th>


                        </tr>


                    </thead>





                    <tbody>


                    {

                    logs.map(log=>(


                        <tr key={log.id}>


                            <td>

                                {
                                new Date(log.fecha)
                                .toLocaleString()
                                }

                            </td>



                            <td>
                                {log.usuario}
                            </td>




                            <td>
                                {log.accion}
                            </td>




                            <td>
                                {log.tareaId}
                            </td>




                            <td>
                                {log.detalle}
                            </td>



                        </tr>


                    ))

                    }



                    </tbody>



                </table>



            </div>


        </Layout>


    );


}


export default Logs;