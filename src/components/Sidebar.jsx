import { Link } from "react-router-dom";
import "./Sidebar.css";


function Sidebar(){

    return(

        <aside className="sidebar">

            <h2 className="logo">
                TaskManager
            </h2>


            <nav>

                <Link to="/dashboard">
                    🏠 Dashboard
                </Link>


                <Link to="/usuarios">
                    👤 Usuarios
                </Link>


                <Link to="/tareas">
                    📋 Tareas
                </Link>
               
            

              <Link to="/logs">

              📋 Historial Logs

              </Link>



                <Link to="/">
                    🚪 Salir
                </Link>
                
                

            </nav>


        </aside>

    );

}


export default Sidebar;