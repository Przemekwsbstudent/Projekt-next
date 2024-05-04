'use client'
import { addContact } from '@/lib/action'
import React from 'react'
import Input from './Input'

const CreateForm = () => {
  return (
    <div>
        <form
        action={addContact}
        className='bg-gray-100 items-center p-2  rounded'
        >
        <div className='flex mb-4'>
            <div className='w-1/2 pr-2'>
                <label className='text-gray-700'>Imię</label>
                <Input
                 type='text'
                 placeholder="Imię"
                 name='firstName'
                />
            </div>
            <div className='w-1/2 pr-2'>
                <label className='text-gray-700'>Nazwisko</label>
                <Input
                 type='text'
                 placeholder="Nazwisko"
                 name='lastName'
                />
            </div>
        </div>
        <div className='flex mb-4'>
            <div className='w-1/2 pr-2'>
                <label className='text-gray-700'>Email</label>
                <Input
                 type='text'
                 placeholder="Email"
                 name='email'
                />
            </div>
            <div className='w-1/2 pr-2'>
                <label className='text-gray-700'>Numer telefonu</label>
                <Input
                 type='number'
                 placeholder="Numer telefonu"
                 name='phone'
                />
            </div>
        </div>
            <button 
            className='btn btn-wide bg-green-500'
            type='submit'>Utwórz kontakt</button>
        </form>
    </div>
  )
}

export default CreateForm