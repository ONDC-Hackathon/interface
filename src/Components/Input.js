import React from 'react'

function Input(props) {
    const handleChange = (e) => {
        props.onChange(e.target.value)
    }
  return (
    <div className='my-3'>
    {props.label && <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 text-left">{props.label}</label>}
    <input value={props.value} onChange={handleChange} type={props.type} id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  )
}

export default Input