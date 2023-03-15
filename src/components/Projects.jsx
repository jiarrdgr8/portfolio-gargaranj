import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { useState } from 'react'
import projects from '../data/projects.js'


const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className='min-h-fit max-w-7xl flex flex-col mx-auto justify-center items-center py-16 px-5 text-center '>    
        <h3 className='pt-3 pb-6 text-3xl lg:text-4xl border-b-2 w-60'>Projects</h3>
        <p className='max-w-xl font-light text-gray-500 mb-10 text-sm pt-6 md:text-base justify-evenly'>These are all the projects I have worked on. Feel free to check them out.</p>

        <div className='max-w-[1080px] w-full m-auto relative group'>
            <div
                style={{ backgroundImage: `url(${projects[currentIndex].image})` }}
                className='h-[780px] custom-height sm:h-[420px] md:h-[540px] lg:h-[660px] rounded-2xl bg-center bg-cover duration-500'
            ></div>

            {/* Project Description */}
            <div className=' md:hidden lg:hidden h-[780px] custom-height sm:h-[420px] md:h-[540px] lg:h-[660px] group-hover:flex md:absolute lg:absolute w-full h-full top-[0%] text-2xl flex-col align-center rounded-2xl bg-center bg-cover bg-black/50 text-white cursor-pointer flex justify-center items-center duration-500'>
                <div className='flex justify-center items-center flex-col pt-11 duration-500'>
                    <h1 className='duration-500'>{projects[currentIndex].title}</h1>
                    <p className='duration-500'>{projects[currentIndex].description}</p>
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
            <div className='md:hidden lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronLeft onClick={prevSlide} size={30} />
            </div>

            {/* Right Arrow */}
            <div className='md:hidden lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
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