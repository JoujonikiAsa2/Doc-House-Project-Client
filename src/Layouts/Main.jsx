import { Outlet } from "react-router-dom";
import Footer from "../sharedComponents/Footer/Footer";
import Navbar from "../sharedComponents/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-[2300]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;