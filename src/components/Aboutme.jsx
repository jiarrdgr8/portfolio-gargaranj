import React from 'react'
import about from '../assets/about.gif'

const Aboutme = () => {
  return (
    <section className='min-h-fit flex  flex-col justify-start items-center py-16 px-5 text-center'>
        <h3 className='pt-3 pb-6 text-3xl lg:text-4xl border-b-2 w-60'>About Me</h3>
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-center pt-6 text-justify'>
            <div className=''>
                <img src={about} alt="coder" className='w-50 h-60 md:w-72 md:h-72'/>
            </div> 
            <div className='max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base justify-evenly'>
                <p>Hi! I am Jay-ar, a Mechanical Engineer who is trying to shift career into Tech as a Full Stack Web Developer. As an Engineer with a background in technology, I bring a unique combination of skills and experience to any project. My broad knowledge in Math, Statistics, and Physics, as well as my ability to quickly adapt to new circumstances and technologies, allows me to tackle a wide range of challenges. I am tech-savvy and have excellent analytical and problem-solving skills, making me a valuable asset in any team.
                </p>
                <br />
                <p>
                    I am also a fast learner, sharp-witted, and enjoy learning new things. With my proficiency in languages, frameworks, and libraries, I am well-equipped to handle any task that comes my way. I am also skilled in utilizing and managing resources to achieve objectives.
                </p>
            </div>
            
        </div>  
    </section>
  )
}

export default Aboutme

