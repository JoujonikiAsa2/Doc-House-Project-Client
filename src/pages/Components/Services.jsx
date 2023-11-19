import service1 from '../../assets/Rectangle 20078.png'
import service2 from '../../assets/Rectangle 10.png'
const Services = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row max-w-screen-[2300] mx-auto lg:px-28 p-4 gap-6 items-center lg:mt-20 mt-12 lg:text-left text-center">
            <div className="lg:w-1/2 w-full">
                <img src={service1} alt="" className='w-[558px] h-[800px]' />
            </div>
            <div className="lg:w-1/2 space-y-12 w-full">
                <div className='space-y-4'>
                    <h2 className='text-xl lg:text-2xl font-bold text-black'>Your Best Medical Help Center</h2>
                    <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aut obcaecati nam voluptatum nesciunt exercitationem.</p>
                    <div className='flex gap-4 lg:justify-start justify-center items-center'>
                        <button className='btn bg-[#F7A582] text-black'>Cavity Protection</button>
                        <button className='btn text-black'>Cosmetic Dentisty</button>
                        <button className='lg:flex hidden btn  text-black'>Oral Surgery</button>
                    </div>
                </div>
                <div>
                    <img src={service2} alt="" className='' />
                </div>
                <div className='space-y-4'>
                    <h2 className='text-xl lg:text-2xl font-bold text-black'>Electro  Gastrology Therapy</h2>
                    <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aut obcaecati nam voluptatum nesciunt exercitationem.</p>
                    <button className='btn btn-outline text-[#F7A582]'>More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Services;