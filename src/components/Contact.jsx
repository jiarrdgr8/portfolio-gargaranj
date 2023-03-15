import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'


const Contact = () => {

const social = [
    {
      id: 1,
      link: 'https://twitter.com',
      icon: <FaTwitter />
    },
    {
      id: 2,
      link: 'https://facebook.com',
      icon: <FaFacebook />
    },
    {
      id: 3,
      link: 'https://linkedin.com',
      icon: <FaLinkedin />
    }
  ]

  return (
    <section className='min-h-fit max-w-7xl flex flex-col mx-auto justify-center items-center py-16 px-5 text-center text'>    
        <h3 className='pt-3 pb-6 text-3xl lg:text-4xl border-b-2 w-60'>Contacts</h3>
        <p className='max-w-xl font-light text-gray-500 mb-2 text-sm pt-6 md:text-base justify-evenly'>Are you looking for a backend/full stack developer? I am open for freelancing or full-time opportunities. Feel free to contact me using your preferred medium:</p>

        <div className='flex justify-evenly py-1 lg:py-6 text-3xl w-full md:w-1/3'>
            {social.map(({ id, link, icon}) => {
            return (
                <a 
                href={link} 
                key={id} 
                target = '_blank'
                rel='noopener noreferrer'
                className='cursor-pointer duration-300 hover:text-rose-600'>
                {icon}
                </a>
            )
            })}
        </div>

        <p className='max-w-xl font-light text-gray-500 mb-2 text-sm pt-2 md:text-base justify-evenly'>or leave a message below.</p>

        {/* Contact Form */}
        <div className='w-6/12 max-w-48 min-w-[360px] md:w-4/6 sm:w-4/6 custom-width:w-4/6'>
            <div className='pt-4 text-left w-full'>
                <form action="https://getform.io/f/650f070b-2d9e-42ca-bf08-702fce21708f" method='POST'>
                    <div className='gap-4 w-full'>
                        <div className="flex flex-col">
                            <label className='capitalize text-sm py-2 font-extralight'>
                                name
                            </label>
                            <input 
                                type="text"
                                name='name' 
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                            />
                        </div>
                    </div>

                    <div className='gap-4 w-full'>
                        <div className="flex flex-col">
                            <label className='capitalize text-sm py-2 font-extralight'>
                                email
                            </label>
                            <input 
                                type="text"
                                name='email' 
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                            />
                        </div>
                    </div>
               
                    <div className='gap-4 w-full'>
                        <div className="flex flex-col">
                            <label className='capitalize text-sm py-2 font-extralight'>
                                message
                            </label>
                            <textarea 
                                name="message" 
                                rows="10" 
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'
                            ></textarea>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                            send message
                        </button>
                    </div>
                </form>
            </div>
        </div>
        



    </section>
  )
}

export default Contact