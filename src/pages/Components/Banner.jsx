import banner from "../../../src/assets/banner.png"
import doc1 from "../../../src/assets/doctor-group.png"
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="min-h-[520px] lg:h-[800px] flex flex-col lg:flex-row md:flex-row justify-center items-center gap-10 p-4">
            <div className="lg:text-left text-center space-y-4 pt-6">
                <div className="text-white text-2xl font-bold">
                    <h2 className="">Your Best Medical</h2>
                    <h2 className="">Help Center </h2>
                </div>
                <p className="text-white text-sm w-[30vw]">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                <button className="btn btn-md lg:btn-md bg-[#F7A582] text-white border-none">All Service</button>
            </div>
            <div>
                <img src={doc1} alt="" />
            </div>
        </div>
    );
};

export default Banner;