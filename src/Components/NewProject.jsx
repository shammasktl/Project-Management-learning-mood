import React, { useRef } from 'react'
import Input from './Input'

const NewProject = () => {
  
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const dueDateRef = useRef(null)

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4 '>
        <li><button className='capitalize text-stone-800 hover:text-stone-950'>Cancel</button></li>
        <li><button className='capitalize bg-stone-800 text-stone-50 duration-300 rounded-md px-6 py-2 hover:bg-stone-950'>save</button></li>
      </menu>
      <div className="">
        <Input ref={titleRef} label="Title"/>
        <Input ref={descriptionRef} label="Description" textarea={true}/>
        <Input ref={dueDateRef} label="Due Date"/>
      </div>
    </div>
  )
}

export default NewProject
