import React from 'react'

const AboutMe = () => {
  return (
    <div name='about' 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
        I’ve always been curious about the technologies behind the apps we use every day. 
        This curiosity has made me a fully-committed life long learner. 
        I have developed a passion for web development and continue to broaden my skills. 
        I enjoy solving problems; being able to never run out of things to learn and discover drives my excitement. 
        When I’m not on my computer, I spend my time reading and traveling when I can.
        </p>

        <br />
      </div>
    </div>
  )
}

export default AboutMe