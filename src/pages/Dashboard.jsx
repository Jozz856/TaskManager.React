import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";


function Dashboard(){

    const navigate = useNavigate();


    return(

        <Layout>


            <div className="dashboard">


                <h1>
                    Dashboard
                </h1>


                <p>
                    Bienvenido al sistema
                </p>



                <div className="cards">


                    <div className="card">

                        <h2>
                            📋 Tareas
                        </h2>

                        <button onClick={()=>navigate("/tareas")}>
                            Ver tareas
                        </button>

                    </div>



                    <div className="card">

                        <h2>
                            👤 Usuarios
                        </h2>

                        <button onClick={()=>navigate("/usuarios")}>
                            Ver usuarios
                        </button>

                    </div>


                </div>


            </div>


        </Layout>

    );

}


export default Dashboard;