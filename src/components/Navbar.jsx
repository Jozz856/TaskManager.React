import "./Navbar.css";


function Navbar(){

    const usuario = localStorage.getItem("usuario");


    return(

        <header className="navbar">

            <h3>
                TASK MANAGER
            </h3>


            <span>
                👤 {usuario}
            </span>


        </header>

    );

}


export default Navbar;