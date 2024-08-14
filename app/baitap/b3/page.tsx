import React from 'react';

export default function SignUpPage() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-50'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'> BT3 : <br />
                <h1 className='text-3xl font-bold mb-6 text-gray-800'>Sign Up Form</h1>
                <form>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-1'>Name</label>
                        <input
                            type='text'
                            id='name'
                            placeholder='Your Name'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-1'>Email</label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Your Email'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='phoneNumber' className='block text-sm font-semibold text-gray-700 mb-1'>Phone Number</label>
                        <input
                            type='text'
                            id='phoneNumber'
                            placeholder='84+'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='address' className='block text-sm font-semibold text-gray-700 mb-1'>Address</label>
                        <input
                            type='text'
                            id='address'
                            placeholder='Tell us a little about the project'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>

                    <div className='mb-6'>
                        <p className='text-sm font-semibold text-gray-700 mb-2'>Checkboxes</p>
                        <div className='grid grid-cols-2 gap-4'>
                            <label className='flex items-center'>
                                <input
                                    type='checkbox' name='D' className='mr-2'
                                />
                                <span className='text-sm'>D</span>
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='checkbox' name='U' className='mr-2'
                                />
                                <span className='text-sm'>U</span>
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='checkbox' name='C' className='mr-2'
                                />
                                <span className='text-sm'>C</span>
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='checkbox' name='V' className='mr-2'
                                />
                                <span className='text-sm'>V</span>
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='checkbox' name='I' className='mr-2'
                                />
                                <span className='text-sm'>I</span>
                            </label>
                            <label className='flex items-center'>
                                <input type='checkbox' name='P' className='mr-2'
                                />
                                <span className='text-sm'>P</span>
                            </label>
                        </div>
                    </div>
                    <button
                        className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}
