import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    obtenerUsuarios,
    eliminarUsuario,
    crearUsuario,
    actualizarUsuario
} from "../api/usuarioApi";

import Layout from "../components/Layout";
import "./Usuarios.css";


function Usuarios(){


    const navigate = useNavigate();


    const [usuarios,setUsuarios] = useState([]);


    const [editando,setEditando] = useState(null);



    const [formUsuario,setFormUsuario] = useState({

        id:null,
        nombreUsuario:"",
        password:""

    });





    useEffect(()=>{

        cargarUsuarios();

    },[]);





    function cargarUsuarios(){


        obtenerUsuarios()

        .then(res=>{


            console.log(res.data);


            setUsuarios(res.data);


        })

        .catch(error=>{


            console.log(error);


        });


    }







    function nuevoUsuario(){


        const nuevo={

            id:"nuevo",

            nombreUsuario:"",

            password:""

        };


        setUsuarios([nuevo,...usuarios]);


        setEditando("nuevo");


        setFormUsuario(nuevo);


    }








    function editarUsuario(usuario){



        setEditando(usuario.id);



        setFormUsuario({


            id:usuario.id,


            nombreUsuario:usuario.nombreUsuario,


            password:""


        });



    }







    function cancelar(){



        if(editando==="nuevo"){


            setUsuarios(

                usuarios.filter(x=>x.id!=="nuevo")

            );


        }



        setEditando(null);



    }








    function guardar(){



        if(editando==="nuevo"){



            crearUsuario({

                nombreUsuario:formUsuario.nombreUsuario,

                password:formUsuario.password

            })

            .then(()=>{


                cargarUsuarios();


                setEditando(null);


            });



        }

        else{



            actualizarUsuario(

                formUsuario.id,

                {

                    nombreUsuario:formUsuario.nombreUsuario,

                    password:formUsuario.password

                }

            )

            .then(()=>{


                cargarUsuarios();


                setEditando(null);


            });



        }



    }









    function borrar(id){


        if(window.confirm("¿Eliminar usuario?")){


            eliminarUsuario(id)

            .then(()=>{


                cargarUsuarios();


            });



        }



    }









return(



<Layout>



<div className="usuarios-container">





<div className="usuarios-header">


<h1>

Usuarios 

</h1>




<div className="acciones-header">


<button

className="btn-regresar"

onClick={()=>navigate("/dashboard")}

>

🏠 Regresar

</button>





<button

className="btn-nuevo"

onClick={nuevoUsuario}

>

+ Nuevo Usuario

</button>



</div>


</div>









<table>


<thead>

<tr>

<th>ID</th>

<th>Usuario</th>

<th>Password</th>

<th>Acciones</th>


</tr>

</thead>







<tbody>


{

usuarios.map(u=>(



<tr key={u.id}>


<td>

{u.id}

</td>





<td>



{

editando===u.id ?



<input

value={formUsuario.nombreUsuario}

onChange={(e)=>

setFormUsuario({

...formUsuario,

nombreUsuario:e.target.value

})

}


/>



:



u.nombreUsuario



}



</td>







<td>


{

editando===u.id ?



<input

type="password"

placeholder="Password"

value={formUsuario.password}

onChange={(e)=>

setFormUsuario({

...formUsuario,

password:e.target.value

})

}


/>



:



"********"



}



</td>








<td>



{

editando===u.id ?



<>



<button

className="btn-guardar"

onClick={guardar}

>

Guardar

</button>





<button

className="btn-cancelar"

onClick={cancelar}

>

Cancelar

</button>



</>



:



<>



<button

className="btn-editar"

onClick={()=>editarUsuario(u)}

>

Editar

</button>







<button

className="btn-eliminar"

onClick={()=>borrar(u.id)}

>

Eliminar

</button>



</>



}




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



export default Usuarios;