import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import avatar from '../assets/avatar.png'

const Hero = () => {

window.addEventListener('scroll', function () {
  const downArrow = document.querySelector('.down-arrow')

  if(this.scrollY >= 90) downArrow.classList.add('hide-down-arrow')
  else downArrow.classList.remove('hide-down-arrow')
})


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
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
      <h2 className='text-4xl text-rose-600 uppercase font-bold'>Jay-ar Gargaran</h2>
      <h3 className='py-3 text-2xl'>Full Stack Developer</h3>
      <p className='max-w-xl font-light text-gray-500'>Hello and welcome! <span className='animate-pulse text-2xl'>👋</span> Whether you're a fellow coding enthusiast or a potential employer looking for a skilled developer, I'm thrilled to have you here. I'm excited to share my portfolio with you and showcase my creativity, expertise, and passion for coding. Let's explore together and see what we can create!</p>

      <div className='flex justify-evenly py-6 lg:py-12 text-3xl w-full md:w-1/3'>
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
        <img src={avatar} alt="3d avatar" className='w-50 h-60 md:w-72 md:h-72 bg-gradient-to-b from-rose-600 rounded-xl'/>
        <a href="/Resume.pdf" download={true} className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 px-9 rounded-lg'>Resume</a>
        <div className='mt-10 down-arrow'> 
          <FaArrowDown className='text-gray-400 text-2xl animate-bounce'/>
        </div>
    </section>
  )
}

export default Hero