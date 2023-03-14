import React from 'react'

const Section = ({ title, paragraph1, paragraph2, children}) => {
  return (
    <section className='min-h-fit flex  flex-col justify-start items-center py-16 px-5 text-center'>
   <h3 className='py-3 text-3xl lg:text-5xl'>{title}</h3>  
   <p className='max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base'>
    {paragraph1}
    {<br />}
    {<br />}
    {paragraph2}
   </p> 
    {children}  
    </section>
  )
}

export default Section