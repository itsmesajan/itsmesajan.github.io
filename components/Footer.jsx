import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Sajan Maharjan <span className='text-sm'> | v 2.0</span> </h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/itsmesajan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sajan-maharjan/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaLinkedinIn size={24} />  
          </a>
          <a href="mailto:itsmesajanmaharjan@gmail.com" className="hover:text-white transition duration-300">
            <AiOutlineMail size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
