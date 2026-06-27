import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Layout.css";

function Layout({ children }) {
    return (
        <>
            <Sidebar />

            <div style={{ marginLeft: "230px" }}>
                <Navbar />

                <div className="contenido">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;