import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function page() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
        <label htmlFor='' className='text-lg font-semibold text-gray-700 mb-2 flex '>
          Placeholder
          <FontAwesomeIcon icon={faSearch} style={{ width: "20px", marginLeft: "8px", color: "#6B7280" }} />
        </label>
        <div className='relative'>
          <input  type='text' id='' placeholder='Search...' className='w-full px- py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
          <div className='text-sm text-gray-500 mt-2'>
            Helper Text
          </div>
        </div>
      </div>
    </div>
  )
}
 