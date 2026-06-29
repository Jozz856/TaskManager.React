import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";

import ListaTareas from "./pages/Tareas/ListaTareas";
import NuevaTarea from "./pages/Tareas/NuevaTarea";
import EditarTarea from "./pages/Tareas/EditarTarea";
import DetalleTarea from "./pages/Tareas/DetalleTarea";

import Logs from "./pages/Logs/Logs.jsx";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/usuarios" element={<Usuarios />} />

                <Route path="/tareas" element={<ListaTareas />} />

                <Route path="/tareas/nueva" element={<NuevaTarea />} />

                <Route path="/tareas/editar/:id" element={<EditarTarea />} />
                
                <Route path="/logs" element={<Logs/>}/>

                <Route path="/tareas/detalle/:id" element={<DetalleTarea />} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;