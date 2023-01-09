import React from 'react'
import { icons } from 'react-icons/lib'
import profilepic from '../assets/profilepic.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" 
    className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I am a Full Stack Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
            A junior full-stack developer experienced in agile methodologies with the ability to design, 
            develop and implement web-based applications. 
            Excellent communicator and able to learn and integrate new languages and technologies quickly.
            </p>
                <div>
                    <Link to='portfolio'
                    smooth
                    duration={500}
                    className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                      Portfolio
                      <span className='group-hover:rotate-90 duration-300'>
                      <MdOutlineKeyboardArrowRight size={25} className='m1-1' />
                      </span>
                      </Link>
                </div>
        </div>
        <div>
            <img src={profilepic} 
            alt='profileimg' 
            className='rounded-2xl mx-auto object-contain h-96 w-96 md:w-full'></img>
        </div>
      </div>
    </div>
  )
}

export default Home