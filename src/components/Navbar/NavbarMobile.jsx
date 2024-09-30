import { RiMenuFill } from "react-icons/ri";
import { IoArrowDown } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowRightAlt } from "react-icons/md";

const NavbarMobile = () => {
    return (
        <section className="w-full p-3 flex items-center lg:hidden">
            <img src="#" alt="Logo" />
            <div className="drawer drawer-end justify-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button"><RiMenuFill className=" text-3xl text-[#002D44]" /></label>
                   
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    
                    <ul className="menu bg-base-200 text-[#022B41] text-base font-extrabold min-h-full w-80 p-4 space-y-3">
                        <div className=" flex justify-end">
                            <AiOutlineClose className="text-[#022B41] text-3xl" />
                        </div>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Pages <IoArrowDown /></a></li>
                        <li><a>Packages</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Cart [0]</a></li>
                        <li><a href="#" className=" rounded-full py-3 text-[#fff] mx-auto px-6 bg-[#022B41]">Free Consultation <MdArrowRightAlt /> </a></li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default NavbarMobile