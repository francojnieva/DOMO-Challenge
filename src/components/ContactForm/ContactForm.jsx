import { useForm } from 'react-hook-form'
import Image from '../../assets/form-section.jpg'
import { useState } from 'react'
import Toast from '../Toaster/Toaster'
import { toast } from 'sonner'

const ContactForm = () => {

    const backgroundImage = `url(${Image})`

    const { handleSubmit, register, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            setTimeout(() => {
                toast.success('Enviado')
                setLoading(false)
            }, 1000)
        } catch (error) {
            console.log(error)
            toast.error('Error al enviar. Por favor intenta más tarde')
            setLoading(false)
        }
    }

    return (
        <section style={{ backgroundImage: backgroundImage }} className=' bg-cover h-screen bg-center py-8 flex items-center lg:w-[50%] lg:h-auto xl:p-12'>
            <Toast />
            <form method='POST' className=' bg-[#fff] w-[90%] mx-auto py-8 px-5 text-[#022B41] md:px-8 md:w-[60%] lg:w-[75%]' onSubmit={handleSubmit(onSubmit)}>
                <button className=" rounded-full py-2  font-extrabold text-xs px-3 border-2 border-[#1a3f58] mb-3">
                    Book your free consultation
                </button>
                <h2 className='font-extrabold text-2xl lg:mb-6 xl:text-[1.6rem]'>Get a free consultation</h2>
                <div className="grid grid-cols-2 items-center space-y-3 my-3 text-[#022B41] text-sm font-bold md:gap-2 md:space-y-0">
                    <div className='flex flex-col col-span-2 lg:col-span-1'>
                        <input
                            className='border-2 border-[#E9E9E9] rounded-md p-3 outline-none placeholder:text-[#022B41] placeholder:font-bold '
                            type="text"
                            id='name'
                            name='name'
                            placeholder='Name'
                            autoComplete='off'
                            {...register('name', {
                                required: 'This field is required',
                                minLength: { value: 3, message: 'The name must be between 3 and 25 characters' },
                                maxLength: { value: 25, message: 'The name must not exceed 25 characters' },
                            })}
                        />
                        <span className='text-xs text-red-600'>{errors.name && errors.name.message}</span>
                    </div>
                    <div className=' flex flex-col col-span-2  lg:col-span-1'>
                        <input
                            className='border-2 border-[#E9E9E9] rounded-md p-3 outline-none placeholder:text-[#022B41] placeholder:font-bold'
                            type="email"
                            id='email'
                            name='email'
                            placeholder='contact@email.com'
                            autoComplete='off'
                            {...register('email', {
                                required: 'This field is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email',
                                },
                            })}
                        />
                        <span className='text-xs text-red-600'>{errors.email && errors.email.message}</span>
                    </div>
                    <textarea
                        rows={4}
                        className='col-span-2 outline-none border-2 border-[#E9E9E9] rounded-md p-3 placeholder:text-[#022B41] placeholder:font-bold'
                        id='message'
                        name='message'
                        placeholder='Please type your message here...'
                        autoComplete='off'
                        {...register('message', {
                            required: 'This field is required',
                            minLength: { value: 3, message: 'The name must be between 3 and 250 characters' },
                            maxLength: { value: 250, message: 'The name must not exceed 250 characters' },
                        })}
                    />
                    <span className='text-xs text-red-600'>{errors.message && errors.message.message}</span>
                </div>
                <button type='submit' className='border-2 w-full rounded-md bg-[#fff] py-2 font-bold border-[#022B41] xl:text-lg'>
                    {loading ? <span className="loading loading-spinner loading-md"></span> : 'Get in touch'}
                </button>
            </form>

        </section>
    )
}

export default ContactForm