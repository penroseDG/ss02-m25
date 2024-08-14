import { faAngleUp, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function page() {
    return ( 
        <div> BT2 : <br /> 
            <div className="p-4 border-2 w-2/5">
                <div className="text-sm font-semibold mb-2">Input Label</div>
                <div className="flex items-center border border-blue-600 rounded px-3 py-2 w-full">
                    <FontAwesomeIcon icon={faClock} className="text-gray-500 w-4 mr-2" />
                    <input
                        className="outline-none flex-grow text-black"
                        type="text"
                        placeholder=""
                    />
                    <FontAwesomeIcon icon={faAngleUp} className="text-gray-500 w-4 ml-2" />
                </div>
                <div className=' w-full'>
                    <div className='flex justify-between'> Trang  <input type="checkbox" /></div>
                    <div className='flex justify-between'> Nga    <input type="checkbox" /></div>
                    <div className='flex justify-between'> Linh   <input type="checkbox" /></div>
                    <div className='flex justify-between'> Hoa    <input type="checkbox" /></div>
                    <div className='flex justify-around'>
                        <div className='bg-blue-500 p-4 rounded w-100'><button>Clear</button></div>
                        <div className='bg-blue-500 p-4 rounded w-100'><button>Apply </button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
