import logoImage from '../../assets/Group 1.png'
const Footer = () => {
    return (
        <div style={{ background: '#F3F3F3' }} className='mt-12'>
            <footer className="flex lg:flex-row md:flex-row flex-col p-10 text-base-content lg:justify-evenly md:justify-evenly justify-center gap-4">
                <aside className='flex flex-col gap-3 lg:text-left text-center'>
                    <div className='flex lg:justify-start justify-center gap-3'>
                        <img src={logoImage} alt="" className='w-10 h-10' />
                        <h2 className='text-3xl font-bold'><span className='text-[#F7A582]'>Doc</span> <span className='text-[#07332F]'>House</span></h2>
                    </div>
                    <p className='max-w-[350px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aut obcaecati nam voluptatum nesciunt exercitationem.</p>
                    <button className='btn btn-outline text-[#F7A582]'>Appoinment</button>
                </aside>
                <nav className='flex flex-col lg:text-left text-center'>
                    <header className="text-xl font-bold text-black pb-3">Quick Links</header>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Doctors</a>
                    <a className="link link-hover">Departments</a>
                    <a className="link link-hover">Online Payment</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">My Account</a>
                </nav>
                <nav className='flex flex-col lg:text-left text-center'>
                    <header className="text-xl font-bold text-black pb-3">Doc House Services</header>
                    <a className='link link-hover'>Pediatric Clinic</a>
                    <a className='link link-hover'>Diagnosis Clinic</a>
                    <a className='link link-hover'>Cardiac Clinic</a>
                    <a className='link link-hover'>Laboratory Analysis</a>
                    <a className='link link-hover'>Gynecological Clinic</a>
                    <a className='link link-hover'>Personal Counseling</a>
                    <a className='link link-hover'>Dental Clinic</a>
                </nav>
                <nav className='flex flex-col lg:text-left text-center'>
                    <header className="text-xl font-bold text-black pb-3">Working Hour</header>
                    <a className='link link-hover'>Monday - 10 am to 7 pm</a>
                    <a className='link link-hover'>Tuesday - 10 am to 7 pm</a>
                    <a className='link link-hover'>Wednesday - 10 am to 7 pm</a>
                    <a className='link link-hover'>Thursday - 10 am to 7 pm</a>
                    <a className='link link-hover'>Friday - 10 am to 7 pm</a>
                    <a className='link link-hover'>Saturday - 10 am to 7 pm</a>
                    <a className='link link-hover'>Sunday - 10 am to 7 pm</a>
                </nav>
            </footer>
            <footer className='flex flex-col justify-center items-center py-3'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='divider flex justify-center w-[300px] lg:w-[1000px] md:[w-1000px] '></div>
                </div>
                <div className='pb-3'>
                    <p>Copyright © 2022 - All right reserved by Doc House Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;