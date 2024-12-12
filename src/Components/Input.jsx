import React from 'react'

const Input = ({ textarea, label, ...props }) => {
  const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300  bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
  return (
    <p className='flex flex-col gap-2 my-4 '>
      <label htmlFor="" className='text-sm font-bold uppercase text-stone-500'>{label}</label>
      {textarea ? 
      (<textarea placeholder={`Enter ${label}`} className={classes} {...props} />) :
      (<input className={classes} placeholder={`Enter ${label}`} {...props} />)}
    </p>
  )
}

export default Input
