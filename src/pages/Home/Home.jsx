import Banner from "../Components/Banner";
import Schedule from "../Components/Schedule";
import Services from "../Components/Services";

const Home = () => {
    return (
        <div className="w-full">
            <Banner></Banner>
            <Services></Services>
            <Schedule></Schedule>
        </div>
    );
};

export default Home;