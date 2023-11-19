import banner from "../../../src/assets/banner.png"
import doc1 from "../../../src/assets/Rectangle 20077.png"
import doc2 from "../../../src/assets/Rectangle 20076.png"
import doc3 from "../../../src/assets/Rectangle 20075.png"
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="min-h-[500px] lg:h-[800px] flex flex-col lg:flex-row md:flex-row justify-center items-center lg:pl-28 lg:-4">
            
            <aside className='w-[50vw] gap-3 lg:text-left text-center pt-8 space-y-4 max-w-[500px]'>
                <h2 className='text-2xl lg:text-5xl font-bold text-white'>Your Best Medical Help Center</h2>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aut obcaecati nam voluptatum nesciunt exercitationem.</p>
                <button className='btn bg-[#F7A582] text-white'>Appoinment</button>
            </aside>

            <div className="w-[50vw] flex justify-center relative">
                <div>
                    <img src={doc1} className="relative z-5 bottom-10 lg:w-[250px] lg:h-[250px] md:w-[250px] md:h-[250px] w-[130px] h-[130px]"/>
                </div>
                <div>
                    <img src={doc2} alt=" " className="absolute lg:top-[7rem] top-[2rem] right-[20vw] z-10 lg:w-[250px] lg:h-[250px] w-[130px] h-[130px] md:w-[250px] md:h-[250px]" />
                </div>
                <div>
                    <img src={doc3} alt="" className="relative bottom-16 z-20 lg:w-[250px] lg:h-[250px] w-[130px] h-[130px] md:w-[250px] md:h-[250px]" />
                </div>
            </div>
        </div>
    );
};

export default Banner;