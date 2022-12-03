import React from 'react'

import me from '../me.JPEG'

const ContactUs = () => {
  return (
    <div className='flex items-center justify-center h-[90vh]'>
        <div className='w-1/2 flex flex-row-reverse justify-between rounded-lg overflow-hidden shadow-2xl' >
            <div>
                <img className=' w-64' src={me} alt="me" />
            </div>
            <div className='my-4 ml-3'>
                <h3 className=' font-semiboldx text-xl mb-3'><span>Developed by: </span>Amir Mohammad Basirati</h3>
                <p>Address: Jannat Abad / Tehran / Iran</p>
                <p><span>Phone Num: </span>+989358710605</p>
                <p><span>E-Mail: </span>amirbasirati13@gmail.com</p>
                <p className='bg-black rounded-md text-white inline-block px-2 mt-2'><a href='https://github.com/amirbt13' target='_blank' rel='noreferrer'>GitHub</a></p>
            </div>
        </div>
    </div>
  )
}

export default ContactUs