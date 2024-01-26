import React from 'react'

const Header = () => {
  return (
    <header className='w-full px-4 bg-slate-50'>
      <nav className='flex items-center justify-between max-w-6xl'>
        <a href="/" className='text-lg font-bold'>Travel Logo</a>
        <button className='bg-indigo-600 text-white px-6 py-2 rounded font-medium'>LogIn</button>
      </nav>
    </header>
  )
}

export default Header
