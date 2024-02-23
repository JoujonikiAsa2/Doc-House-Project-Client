import { IoCall, IoLocationOutline } from 'react-icons/io5';
import bg from '../../assets/banner.png'
const Contact = () => {
    return (
        <div className='flex justify-center items-center mt-20 p-4'>
            <div className='bg-[#07332F] text-white flex flex-col lg:flex-row md:flex-row items-center p-10 gap-10 lg:w-[1142px] md:w-[1024px] w-full rounded-lg'>
                <div className='flex flex-col gap-3 lg:text-left text-center'>
                    <h2 className='text-2xl font-bold'>Contact With Us</h2>
                    <p className='lg:w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius commodi modi sapiente veritatis libero. Ut eum necessitatibus aliquam sit quam recusandae sapiente optio</p>
                    <div className="flex justify-center lg:justify-start items-center lg:gap-6 gap-2">
                        <IoCall className="text-white"></IoCall> <span>+88 01750 14 14 14</span>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center lg:gap-6 gap-2">
                        <IoLocationOutline className="text-white"></IoLocationOutline> <span>Dhanmondi, Dhaka, Bangladesh</span>
                    </div>
                </div>
                <div>
                    <form>
                        <div className='w-full flex gap-2 mb-2 lg:flex-row md:flex-row flex-col'>
                            <div className='lg:w-1/2 md:w-1/2 w-full'>
                                <input type="text" name="" className='lg:w-full md:w-full max-w-[320px] input input-bordered focus:outline-none bg-white opacity-10 shadow-xl text-white' />
                            </div>
                            <div className='lg:w-1/2 md:w-1/2 w-full'>

                                <input type="text" name="" className='lg:w-full md:w-full max-w-[320px] input input-bordered focus:outline-none bg-white opacity-10 shadow-xl text-white' />
                            </div>
                        </div>
                        <div className='w-full flex gap-2 mb-2 lg:flex-row md:flex-row flex-col'>
                            <div className='lg:w-1/2 md:w-1/2 w-full'>
                                <input type="text" name="" className='lg:w-full md:w-full max-w-[320px] input input-bordered focus:outline-none bg-white opacity-10 shadow-xl text-white' />
                            </div>
                            <div className='lg:w-1/2 md:w-1/2 w-full'>
                                <input type="text" name="" className='lg:w-full md:w-full max-w-[320px] input input-bordered focus:outline-none bg-white opacity-10 shadow-xl text-white' />
                            </div>
                        </div>
                        <div className='w-full flex gap-2 mb-2 lg:flex-row md:flex-row flex-col'>
                            <div className='lg:w-1/2 md:w-1/2 w-full'>
                                <input type="text" name="" className='lg:w-full md:w-full max-w-[320px] input input-bordered focus:outline-none-white opacity-10 shadow-xl text-white' />
                            </div>
                            <div className='lg:w-1/2 md:w-1/2 w-full'>
                                <input type="text" name="" className='lg:w-full md:w-full max-w-[320px] input input-bordered focus:outline-none bg-white opacity-10 shadow-xl text-white' />
                            </div>
                        </div>
                        <div className='w-full'>
                                <input type="submit" value="Book Now" name="" className='lg:w-full md:w-full max-w-[640px] input input-bordered focus:outline-none bg-[#F7A582] shadow-xl text-white text-center' />
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;