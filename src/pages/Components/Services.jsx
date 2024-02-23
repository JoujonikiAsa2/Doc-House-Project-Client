import service1 from '../../assets/Rectangle 20078.png'
import service2 from '../../assets/Rectangle 10.png'
const Services = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center lg:mt-20 gap-4 lg:text-left text-center px-4 py-6">
            <div className='flex justify-center  w-[90vw] md:w-[50vw] lg:w-[50vw] lg:flex lg:justify-end'>
                <img src={service1} alt="" className='w-[90vw] md:w-[540px] lg:w-[540px] lg:h-[800px] md:h-[850px] h-[700px]' />
            </div>
            <div className="space-y-4 w-[90vw] md:w-[50vw] lg:w-[50vw] flex flex-col lg:justify-start lg:items-start justify-center items-center
            ">
                <div className='space-y-4r'>
                    <h2 className='text-xl lg:text-2xl font-bold text-black'>Your Best Medical Help Center</h2>
                    <p className='text-black max-w-[515px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aut obcaecati nam voluptatum nesciunt exercitationem.</p>
                    <div role="tablist" className="tabs tabs-boxed">
                        <a role="tab" className="tab"><button className=' text-black'>Cavity Protection</button></a>
                        <a role="tab" className="tab tab-active bg-[#F7A582]"><button className=' text-black'>Cosmetic Dentisty</button>
                        </a>
                        <a role="tab" className="tab"><button className='lg:flex hidden  text-black'>Oral Surgery</button></a>
                    </div>
                    <div className='flex flex-wrap gap-4 lg:justify-start justify-center items-center'>
                        

                    </div>
                </div>
                <div className=' w-[90vw] md:w-[50vw] lg:w-[50vw]'>
                    <img src={service2} alt="" className='w-[90vw] md:w-[540px] lg:w-[540px] h-[350px]' />
                </div>
                <div className='space-y-4'>
                    <h2 className='text-xl lg:text-2xl font-bold text-black'>Electro  Gastrology Therapy</h2>
                    <p className='text-black max-w-[515px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aut obcaecati nam voluptatum nesciunt exercitationem.</p>
                    <button className='btn btn-outline text-[#F7A582]'>More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Services;