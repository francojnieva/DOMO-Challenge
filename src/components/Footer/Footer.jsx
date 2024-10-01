import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
    return (
        <footer className="relative z-20 p-3 bg-[#022B41] space-y-5 text-[#FFF] lg:px-14 lg:py-8 md:flex justify-between  xl:px-24">
            <p className=" md:w-[50%]">Esta maqueta representa la 4 imagen del desafío propuesto. Desde el primer momento me pareció la más completa a desarrollar. Además de realizar la maqueta con el contenido y estilo, quise ir más allá agregando validación al formulario. <br />Espero haber cumplido con sus expectativas. Me encantaría poder trabajar con ustedes. Saludos.</p>
            <ul className=" flex items-center space-x-6">
                <li><a href="https://www.linkedin.com/in/francojnieva/" target="_blanck"><FaLinkedin className=" text-2xl" /></a></li>
                <li><a href="https://github.com/francojnieva" target="_blanck"><FaGithub className=" text-2xl" /></a></li>
                <li><a href="mailto:franco97nieva@gmail.com"><MdEmail className=" text-2xl" /></a></li>
                <li><a href="https://www.instagram.com/franconieva.97" target="_blanck"><RiInstagramFill className=" text-2xl" /></a></li>
            </ul>
            
        </footer>
    )
}

export default Footer