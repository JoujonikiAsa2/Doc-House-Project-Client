import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import logoImage from '../../assets/logo2.png'


const Navbar = () => {
    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>About</NavLink></li>
        <li><NavLink>Apoinment</NavLink></li>
        <li><NavLink>Login</NavLink></li>
    </>
    return (
        <div className="navbar justify-between bg-base-100 text-white lg:px-28">
            <div className="navbar-start">
                <div className='flex gap-3'>
                    <img src={logoImage} alt="" className='w-8 md:w-10 lg:w-10 h-8 md:h-10 lg:h-10' />
                    <h2 className='lg:text-3xl text-2xl font-bold'><span className='text-[#F7A582]'>Doc</span><span className='text-[#07332F]'>House</span></h2>
                </div>
            </div>
            <div className="">
                <div className='lg:flex md:hidden hidden'>
                    <ul className="menu menu-horizontal px-1  text-white">
                        {links}
                    </ul>
                </div>
                <div className="lg:hidden md:dropdown dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <IoMenu className='text-xl text-black'></IoMenu>
                    </label>
                    <ul tabIndex={0} className="lg:hidden menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-20 text-black">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;