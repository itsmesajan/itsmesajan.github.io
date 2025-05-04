import Image from 'next/image'
import React from 'react'
import amazonImg from '../public/assets/projects/amazon.png'
import ProjectItem from './ProjectItem'
import JsProjectImg from '../public/assets/projects/JsProject.png'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'> 
        <p className='text-xl tracking-widest uppercase text-[#ee1e25]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>

        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem 
          title='Amazon Clone' 
          backgroundImg={amazonImg}
          projectUrl='/amazon'
          tech='React JS'
          />
          <ProjectItem 
          title='Js Project' 
          backgroundImg={JsProjectImg}
          projectUrl='/JsProject'
          tech='JavaScript'
          />
        </div>

      </div>
    </div>
  )
}

export default Projects
