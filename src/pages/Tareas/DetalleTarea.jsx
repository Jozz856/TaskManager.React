import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";


function DetalleTarea() {

    const { id } = useParams();


    return (

        <Layout>

            <div>

                <h1>
                    Detalle de tarea
                </h1>

                <p>
                    ID: {id}
                </p>

            </div>

        </Layout>

    );

}


export default DetalleTarea;