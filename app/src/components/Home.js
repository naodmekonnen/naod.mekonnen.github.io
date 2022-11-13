import React from 'react'
import { icons } from 'react-icons/lib'
import profilepic from '../assets/profilepic.jpg'
import {GoArrowRight} from 'react-icons'

const Home = () => {
  return (
    <div name="home" 
    className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-4'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I am a Full Stack Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
            </p>
                <div>
                    <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                      Portfolio
                      </button>
                </div>
        </div>
        <div>
            <img src={profilepic} alt='profileimg' className='rounded-2xl mx-auto object-contain h-96 w-96 md:w-full'></img>
        </div>
      </div>
    </div>
  )
}

export default Home