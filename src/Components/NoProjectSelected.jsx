import React from 'react'
import { assets } from '../assets/assets'
import Button from './Button'

const NoProjectSelected = () => {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img src={assets.noProjects} className='size-16 object-contain mx-auto' alt="Tasklist is Empty" />
      <h2 className='capitalize text-xl font-bold text-stone-500 my-4'>No Projects selected</h2>
      <p className='capitalize text-stone-400 mb-4'>Select a Project or get Started with a new one</p>
      <Button className='mt-8 '>Create new Project</Button>
    </div>
  )
}

export default NoProjectSelected
