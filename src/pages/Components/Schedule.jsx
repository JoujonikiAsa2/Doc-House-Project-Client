import { MdPhoneCallback , MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


const Schedule = () => {
    return (
        <div className="text-white flex flex-col lg:flex-row md:flex-row justify-center items-center lg:mt-20 gap-4 lg:text-left text-center px-4 py-6">
            <div className="flex lg:flex-row flex-col gap-4 justify-center items-center rounded-lg w-[90vw] md:w-[32vw] lg:w-[375px] h-[220px] bg-[#07332F] p-4">
                <div>
                    <MdOutlineWatchLater className="text-3xl"></MdOutlineWatchLater>
                </div>
                <div>
                    <h2 className="text-lg font-bold">Opening Hours</h2>
                    <p className="text-base font-light">Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 justify-center items-center rounded-lg w-[90vw] md:w-[32vw] lg:w-[375px] h-[220px] bg-[#F7A582] p-4">
                <div>
                    <IoLocationOutline  className="text-3xl"></IoLocationOutline>
                </div>
                <div>
                    <h2 className="text-lg font-bold">Our Locations</h2>
                    <p className="text-base font-light">Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 justify-center items-center rounded-lg w-[90vw] md:w-[32vw] lg:w-[375px] h-[220px] bg-[#07332F] p-4">
                <div>
                    <MdPhoneCallback  className="text-3xl"></MdPhoneCallback >
                </div>
                <div>
                    <h2 className="text-lg font-bold">Contact Us</h2>
                    <p className="text-base font-light">+88 01750 00 00 00 </p>
                </div>
            </div>
        </div>
    );
};

export default Schedule;