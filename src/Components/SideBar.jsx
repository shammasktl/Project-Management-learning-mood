import React from 'react'
import Button from './Button'

const SideBar = ({onStartAddProject,projects}) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-950 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
      <div className="">
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      <ul>
        {
          projects.map((project) => {
            return (
              <li key={project.id}>
                <button className='w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 duration-500 hover:bg-stone-800 hover:text-stone-200'>{project.title}</button>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default SideBar
