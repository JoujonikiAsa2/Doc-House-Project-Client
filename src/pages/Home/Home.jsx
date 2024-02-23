import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import ExpertDoctors from "../Components/ExpertDoctors";
import Schedule from "../Components/Schedule";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

const Home = () => {
    return (
        <div className="w-full">
            <Banner></Banner>
            <Services></Services>
            <Schedule></Schedule>
            <Testimonials></Testimonials>
            <ExpertDoctors></ExpertDoctors>
            <Contact></Contact>
        </div>
    );
};

export default Home;