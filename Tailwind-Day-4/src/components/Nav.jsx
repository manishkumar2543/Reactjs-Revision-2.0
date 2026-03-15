import React from 'react'

const Nav = () => {
  return (
    <div className='flex m-10 justify-between bg-amber-700 items-center  p-10'>
        <h1 className='font-semibold text-4xl'>Navbar</h1>
       <div className='flex  gap-20 mr-40 text-shadow-cyan-400'>
        <h4 >Home</h4>
        <h4>Contect</h4>
        <h4>About</h4>
       </div>
    </div>
  )
}

export default Nav