import { Outlet } from "react-router-dom";
import Footer from "../sharedComponents/Footer/Footer";
import Navbar from "../sharedComponents/Navbar/Navbar";
import Banner from "../pages/Components/banner";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="max-w-screen-[2300] mx-[100px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;