import React from 'react'
import { FaLinkedinIn,FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'


const Contact = () => {
  return (
    <div id='contact' className='w-full '>

      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='uppercase tracking-widest text-xl text-[#ee1e25]'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}

          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full'>
                <div>
                  <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='/' />
                </div>
                <div>
                  <h2 className='py-2'>Sajan</h2>
                  <p>Front-End Developer</p>
                  <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                </div>

                <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
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

          {/* right */}

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='py-4'>

              <form
                action='https://formsubmit.co/itsmesajanmaharjan@gmail.com'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone'/>
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email'/>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject'/>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message' />
                </div>
                <button className='w-full p-4 text-gray-100 mt-4' type='submit'>Send Message</button>
              </form>
            </div>

          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'> 
              <HiOutlineChevronDoubleUp className='text-[#ee1e25]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
