import { MdArrowRightAlt } from "react-icons/md"
import ContactForm from "../ContactForm/ContactForm"


const MainSection = () => {
    return (
        <main className="lg:flex">
            <section className='hidden lg:block w-[50%] p-16 bg-[#022B41] text-[#FAFDFF] lg:space-y-36 xl:p-24 xl:px-32'>
                <div>
                    <button className=" rounded-full py-2 font-bold text-xs px-3 border-2 border-[#8a8a8a] mb-3 xl:mb-5">
                        Welcome to Businezz X
                    </button>
                    <h1 className=' text-5xl font-semibold'>Join us in growing <br /> your <span className='underline underline-offset-8 decoration-[#0696FC]'>business</span>.</h1>
                </div>
                <div className=" py-3 space-y-5 border border-x-transparent border-b-transparent border-[#8a8a8a4d]">
                    <p className="py-4 relative z-20 font-bold xl:text-xl text-[#ECF3FE]">Elevate your business with businezz X, a professional Webflow template.</p>
                    <button className="relative z-20 bg-[#fff] font-extrabold py-3 px-5 rounded-full text-[#022B41] flex items-center">
                        Contact us
                        <MdArrowRightAlt className=" ml-2" />
                    </button>
                    <div className="absolute -bottom-8 -left-44 w-96 h-48 rounded-full blur-3xl bg-[#003957] xl:-bottom-20"></div>
                </div>
            </section>
            <ContactForm />
        </main>
    )
}

export default MainSection