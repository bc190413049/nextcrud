import React from 'react'

const Form = () => {
  return (
    <form >
      <div className='input-type'>
        <input type='text' name='firstname' placeholder='FirstName' className='border w-full px-5 py-3 focus:outline-none'/>
      </div>
      <div className='input-type'>
        <input type='text' name='lastname' placeholder='LastName' className='border w-full px-5 py-3 focus:outline-none'/>
      </div>
      <div className='input-type'>
        <input type='text' name='email' placeholder='Email' className='border w-full px-5 py-3 focus:outline-none'/>
      </div>
      <div className='input-type'>
        <input type='text' name='salary' placeholder='Salary' className='border w-full px-5 py-3 focus:outline-none'/>
      </div>
      <div>
        <div className='form-check'>
            <input type='radio' name='status' value='active' id='radioDefault1' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
        <label htmlFor='radioDefault1' className='block-inline text-gray-800'>
            Active
        </label>
        </div>
        <div className='form-check'>
            <input type='radio' name='status' value='active' id='radioDefault1' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
        <label htmlFor='radioDefault1' className='block-inline text-gray-800'>
            InActive
        </label>
        </div>
      </div>
      <button className='flex justify-center text-md'>Add</button>
    </form>
  )
}

export default Form
