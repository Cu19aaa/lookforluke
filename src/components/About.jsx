import React from 'react'
import Profile from '../assets/profile.jpg'


const About = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/*Left Side*/}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-6 object-cover w-full h-full p-2' src={Profile} alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={Profile} alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={Profile} alt="/" />
        {/*<img className='row-span-3 object-cover w-full h-full p-2' src={Pic4} alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src={Pic5} alt="/" />*/}
      </div>
      {/*Right Side*/}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>About Me</h3>
        <p className='text-2xl py-6'>Hi. My name is Luke</p>
        <p className='pb-6 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum porro,
             consequatur labore minus sequi magnam ipsa dolorem, corporis veniam id 
             nihil eum non expedita eius. Quam deserunt repellat provident dolorem.</p>
        {/*<div>
            <button className='border-black mr-4 hover:shadow-xl '>Find out more</button>
            <button className='bg-black text-white border-black hover:shadow-xl'>Book Now</button>
    </div>*/}
      </div>
    </div>
  )
}

export default About
