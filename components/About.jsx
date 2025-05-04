import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#ee1e25]'>
            About
          </p>
          <h2 className='py-4 text-gray-700'>
            Who I Am
          </h2>
          <p className='py-2 text-gray-600'>//I am not tour normal developer</p>
          <p className='py-2 text-gray-600'>I’m a passionate front-end developer with a strong foundation in creating visually engaging and user-friendly digital experiences. With expertise in HTML, CSS, JavaScript, and popular frameworks, I bring designs to life with clean, responsive code. I have a keen eye for design and detail, blending my skills in UI/UX, graphic design, web design, and video editing to deliver seamless and impactful web solutions. My goal is to build websites and applications that are not only functional but also leave a lasting impression. Let’s build something amazing together!developer</p>

          <Link href='/#projects'>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my lates projects.
          </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src="https://www.maharjan-sajan.com.np/img/me.webp" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About
