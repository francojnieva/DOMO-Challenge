import { IoArrowDown } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";

const NavbarDesktop = () => {
    return (
        <nav className="hidden lg:block px-14 py-5 xl:px-24 text-lg">
            <div className="text-[#022B41] font-extrabold lg:flex lg:justify-between lg:items-center">
                <div className=" flex items-center space-x-6">
                    <img src="#" alt="Logo" title="Nombre de la empresa" />
                    <ul className=" pl-5 border-2 border-y-transparent border-r-transparent border-l-[#E9E9E9] flex items-center space-x-6">
                        <li><a href="#" className=" opacity-75">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#" className=" flex items-center ">Pages <IoArrowDown className="ml-2" /></a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Cart [0]</a></li>
                    </ul>
                </div>
                <button className=" rounded-full py-3 px-6 border-2 border-[#022B41] flex items-center ">Free Consultation <MdArrowRightAlt className=" ml-2" /></button>
            </div>
        </nav>    
       
    )
}

export default NavbarDesktop