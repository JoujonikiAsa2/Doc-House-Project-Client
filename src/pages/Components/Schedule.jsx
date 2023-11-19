import { MdPhoneCallback , MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


const Schedule = () => {
    return (
        <div className="text-white flex gap-5 justify-center items-center">
            <div className="flex gap-4 justify-center items-center w-[340px] h-[200px] bg-[#07332F] p-4">
                <div>
                    <MdOutlineWatchLater className="text-4xl"></MdOutlineWatchLater>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Opening Hours</h2>
                    <p className="text-lg font-light">Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center w-[340px] h-[200px] bg-[#F7A582] p-4">
                <div>
                    <IoLocationOutline  className="text-4xl"></IoLocationOutline>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Our Locations</h2>
                    <p className="text-lg font-light">Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center w-[340px] h-[200px] bg-[#07332F] p-4">
                <div>
                    <MdPhoneCallback  className="text-4xl"></MdPhoneCallback >
                </div>
                <div>
                    <h2 className="text-xl font-bold">Contact Us</h2>
                    <p className="text-lg font-light">+88 01750 00 00 00 </p>
                </div>
            </div>
        </div>
    );
};

export default Schedule;