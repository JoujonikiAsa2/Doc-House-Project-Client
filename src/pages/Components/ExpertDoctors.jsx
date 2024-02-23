import { IoCalendarOutline, IoLocationOutline, IoStar } from "react-icons/io5";
import SectionTitle from "../../sharedComponents/SectionTitle/SectionTitle";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import card1 from '../../assets/doc1.png'
import card2 from '../../assets/doc2.png'
import card3 from '../../assets/doc3.png'


const ExpertDoctors = () => {
    return (
        <div className="space-y-4 mt-20 flex flex-col justify-center items-center p-4">
            <SectionTitle heading="Our Expert Doctors" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."></SectionTitle>
            <div className="lgw-[1142px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1justify-center items-center justify-items-center gap-4">
                <div className="space-y-4 card  border p-6 lg:w-[365px]">
                    <div className="flex flex-col">
                        <img src={card1} alt="" />
                        <h4 className="text-lg font-bold">Karyen Anderson</h4>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className="flex">
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                        </div>
                    </div>
                    <div className="divider w-3/4"></div>
                    <div>
                        <div className="flex items-center gap-6">
                            <IoLocationOutline className="text-gray-500"></IoLocationOutline> <span>Dhanmondi, Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <IoCalendarOutline className="text-gray-500"></IoCalendarOutline><span>Available On Mon, 22 December</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <PiCurrencyCircleDollarLight className="text-gray-500"></PiCurrencyCircleDollarLight><span>$15</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 card  border p-6 lg:w-[365px]">
                    <div className="flex flex-col">
                        <img src={card2} alt="" />
                        <h4 className="text-lg font-bold">Karyen Anderson</h4>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className="flex">
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                        </div>
                    </div>
                    <div className="divider w-3/4"></div>
                    <div>
                        <div className="flex items-center gap-6">
                            <IoLocationOutline className="text-gray-500"></IoLocationOutline> <span>Dhanmondi, Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <IoCalendarOutline className="text-gray-500"></IoCalendarOutline><span>Available On Mon, 22 December</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <PiCurrencyCircleDollarLight className="text-gray-500"></PiCurrencyCircleDollarLight><span>$15</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 card border p-6 lg:w-[365px]">
                    <div className="flex flex-col">
                        <img src={card3} alt="" />
                        <h4 className="text-lg font-bold">Karyen Anderson</h4>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className="flex">
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                            <IoStar className="text-yellow-600 text-lg"></IoStar>
                        </div>
                    </div>
                    <div className="divider w-3/4"></div>
                    <div>
                        <div className="flex items-center gap-6">
                            <IoLocationOutline className="text-gray-500"></IoLocationOutline> <span>Dhanmondi, Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <IoCalendarOutline className="text-gray-500"></IoCalendarOutline><span>Available On Mon, 22 December</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <PiCurrencyCircleDollarLight className="text-gray-500"></PiCurrencyCircleDollarLight><span>$15</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctors;