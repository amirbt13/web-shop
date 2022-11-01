import React from 'react'
import Typewriter from 'typewriter-effect'



const Landing = () => {
  

  return (
    <div className="w-screen h-[94vh] mx-auto bg-gradient-to-r from-cyan-500 to-blue-500">
        <div>
            <h2 className='relative top-96 ml-10 text-6xl md:text-[5rem]'>
              <Typewriter 
                  options={{
                    loop: true,
                    cursor: ''
                  }}
                  onInit={(typewriter) => {
                    return typewriter.typeString('WEB-SHOP')
                    .pauseFor(3000)
                    .deleteAll()
                    .start()
                  }}
              />
            </h2>
        </div>
    </div>
  )
} 

export default Landing
