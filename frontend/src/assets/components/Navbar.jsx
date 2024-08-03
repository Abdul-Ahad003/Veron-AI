import React from 'react'

const Navbar = () => {
  return (
    <header className=' sticky top-0'>
        <nav className=' bg-[#2e43e8] py-1.5 px-8'>
            <div className=' flex justify-between items-center'>
            <div className=' flex items-center gap-2'>
                <img className=' w-12 h-12' src='./images/e.png' alt=''/>
                <span className=' text-white font-bold text-[20px]'>Veron AI</span>
            </div>
            <div>
            <a href='https://github.com/Abdul-Ahad003' target='_blank'> <img  className=' w-9 h-9' src='./github.svg' alt='github'/> </a>
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar