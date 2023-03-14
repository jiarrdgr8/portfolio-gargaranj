import React from 'react'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { useState } from 'react'


const Projects = ({title, paragraph1}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
        image: p1,
        title: "Facebuko",
        description: 'Lorem adasdasdasdasd',
        demo: 'https://facebook.com',
        github: 'https://github.com/'
    },
    {
        image: p2,
        title: "Esports and Chill",
        description: 'Lorem adasdasdasdasd',
        demo: 'https://facebook.com',
        github: 'https://github.com/'
    },
    {
        image: p3,
        title: "Jiarrflix",
        demo: 'https://facebook.com',
        description: 'Lorem adasdasdasdasd',
        github: 'https://github.com/'
    },
    {
        image: p4,
        title: "ECommerce Landing Page",
        description: 'Lorem adasdasdasdasd',
        demo: 'https://facebook.com',
        github: 'https://github.com/'
    },
    {
        image: p5,
        title: "Contact Management App",
        description: 'Lorem adasdasdasdasd',
        demo: 'https://facebook.com',
        github: 'https://github.com/'
    }
  ]

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className='min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center'>    
        <h3 className='pt-3 pb-3 text-3xl lg:text-4xl border-b-2 w-60'>Projects</h3>
        <p className='max-w-xl font-light text-gray-500 mb-10 text-sm pt-3 md:text-base justify-evenly'>These are all the projects I have worked on. Feel free to check them out.</p>

        <div className='max-w-[1080px] h-[780px] w-full m-auto relative group'>
            <div
                style={{ backgroundImage: `url(${projects[currentIndex].image})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>

            {/* Project Description */}
            <div className='hidden group-hover:block absolute w-full h-full top-[0%] text-2xl  align-center rounded-2xl bg-center bg-cover bg-black/50 text-white cursor-pointer flex justify-center items-center'>
                <div className='flex justify-center items-center flex-col pt-11 absolute top-[50%]'>
                    <h1>{projects[currentIndex].title}</h1>
                    <p>{projects[currentIndex].description}</p>
                </div>
                <div className='flex justify-center py-6 text-3xl w-full ' >
                    <a 
                        href={projects[currentIndex].demo} 
                        target = '_blank'
                        rel='noopener noreferrer'
                        className='px-10 py-5'>
                            <FaExternalLinkAlt />
                    </a>
                    <a 
                        href={projects[currentIndex].github}
                        target = '_blank'
                        rel='noopener noreferrer'
                        className='px-10 py-5'>
                            <FaGithub />
                    </a>
                </div>
            </div>

            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronLeft onClick={prevSlide} size={30} />
            </div>

            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronRight onClick={nextSlide} size={30} />
            </div>
        </div>
        <div className='flex top-4 justify-center py-2'>
                {projects.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer'
                >
                    <GoPrimitiveDot className= 'hover:text-rose-600 grow-1'/>
                </div>
                ))}
            </div>
    </section>
  )
}

export default Projects