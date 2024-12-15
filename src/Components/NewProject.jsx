import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

const NewProject = ({ onAdd }) => {

  const modal = useRef(null)

  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const dueDateRef = useRef(null)

  const handleSave = () => {
    const enteredTitle = titleRef.current.value
    const enteredDescription = descriptionRef.current.value
    const enteredDueDate = dueDateRef.current.value

    if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
      modal.current.open();
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <>
      <Modal ref={modal} />
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4 '>
          <li><button className='capitalize text-stone-800 hover:text-stone-950'>Cancel</button></li>
          <li><button className='capitalize bg-stone-800 text-stone-50 duration-300 rounded-md px-6 py-2 hover:bg-stone-950' onClick={handleSave}>save</button></li>
        </menu>
        <div className="">
          <Input ref={titleRef} type="text" label="Title" />
          <Input ref={descriptionRef} label="Description" textarea={true} />
          <Input ref={dueDateRef} type="date" label="Due Date" />
        </div>
      </div>
    </>
  )
}

export default NewProject
