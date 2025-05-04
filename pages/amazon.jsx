import Image from 'next/image'
import React from 'react'
import amazonImg from '../public/assets/projects/amazon.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const amazon = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10'/>
          <Image className='absolute z-1' layout='fill' objectFit='cover' 
              src={amazonImg}
              alt='/'
            />

          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Amazon Clone</h2>
            <h3>React JS / Firebase</h3>
          </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>This is a clone of the Amazon website built using React JS. It includes features such as product listings, a shopping cart, and user authentication.</p>

          <a
            href='https://github.com/itsmesajan/amazon_clone_react'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://www.maharjan-sajan.com.np/amazon_clone_react/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>

        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><span className='pr-1'><RiRadioButtonFill/></span>React JS</p>
              <p className='text-gray-600 py-2 flex items-center'><span className='pr-1'><RiRadioButtonFill/></span>JavaScript</p>
              <p className='text-gray-600 py-2 flex items-center'><span className='pr-1'><RiRadioButtonFill/></span>CSS</p>
              <p className='text-gray-600 py-2 flex items-center'><span className='pr-1'><RiRadioButtonFill/></span>Firebase</p>
              <p className='text-gray-600 py-2 flex items-center'><span className='pr-1'><RiRadioButtonFill/></span>Stripe</p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
        <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default amazon
