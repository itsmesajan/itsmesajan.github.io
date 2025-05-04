import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px]  w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>Let's Build Something Together</p>
          <h1 className='py-4 text-gray-700'>
            Hi, I am <span className='text-[#ee1e25]'>Sajan</span>
          </h1>
          <h2 className='py-2 text-gray-700'>A Front-End Web Developer</h2>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm a front-end web web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications wile learning back-end technologies.</p>

          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

            <a href='https://www.linkedin.com/in/sajan-maharjan/' target='_blank' rel='noreferrer'> 
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaLinkedinIn />
              </div>
              </a>

             <a href='https://github.com/itsmesajan' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
            <FaGithub />
            </div>
            </a>
          
            <a href='mailto:itsmesajanmaharjan@gmail.com' target='_blank' rel='noreferrer'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <AiOutlineMail />
              </div>
              </a>
          
            <a href='/Resume.jpg' download="Sajan-Maharjan-WebDeveloper-Resume" target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Main
