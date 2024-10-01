import Image from '../../assets/form-section.jpg'

const ContactForm = () => {

    const backgroundImage = `url(${Image})`

    return (
        <section style={{ backgroundImage: backgroundImage }} className=' bg-cover h-screen bg-center py-8 flex items-center lg:w-[50%] lg:h-auto xl:p-12'>
            <form method='POST' className=' bg-[#fff] w-[90%] mx-auto py-8 px-5 text-[#022B41] md:px-8 lg:w-[75%]'>
                <button className=" rounded-full py-2  font-extrabold text-xs px-3 border-2 border-[#1a3f58] mb-3">
                    Book your free consultation
                </button>
                <h2 className='font-extrabold text-2xl lg:mb-6 xl:text-[1.6rem]'>Get a free consultation</h2>
                <div className="grid grid-cols-2 items-center space-y-3 my-3 text-[#022B41] text-sm font-bold md:gap-2 md:space-y-0">
                    <input 
                        className='border-2 col-span-2 border-[#E9E9E9] rounded-md p-3 outline-none placeholder:text-[#022B41] placeholder:font-bold md:col-span-1'
                        type="text" 
                        id='name' 
                        name='name' 
                        placeholder='Name'
                        autoComplete='off' 
                    />
                    <input 
                        className='border-2 col-span-2 border-[#E9E9E9] rounded-md p-3 outline-none placeholder:text-[#022B41] placeholder:font-bold md:col-span-1'
                        type="email" 
                        id='email' 
                        name='email' 
                        placeholder='contact@email.com' 
                        autoComplete='off' 
                    />
                    <textarea 
                        rows={4} 
                        className='col-span-2 outline-none border-2 border-[#E9E9E9] rounded-md p-3 placeholder:text-[#022B41] placeholder:font-bold' 
                        id='message' 
                        name='message' 
                        placeholder='Please type your message here...' 
                        autoComplete='off' 
                    />
                </div>
                <button type='submit' className='border-2 w-full rounded-md bg-[#fff] py-2 font-bold border-[#022B41] xl:text-lg'>
                    Get in touch
                </button>
            </form>

        </section>
    )
}

export default ContactForm