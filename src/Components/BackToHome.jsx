import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Ensure you have react-icons installed

const BackToHome = () => {
  return (
    <div className='relative z-50'>
      <Link 
        to="/#projects" // Keeps your hash link
        className="absolute top-40 left-6 flex items-center gap-2 px-6 py-3 bg-neutral-100/80 backdrop-blur-md border border-white/10 rounded-full text-black hover:border-green-500 hover:bg-green-400 transition-all duration-300 group"
      >
        {/* Arrow moves slightly left on hover */}
        <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="font-bold text-sm uppercase tracking-wide">Back</span>
      </Link>
    </div>
  )
}

export default BackToHome;