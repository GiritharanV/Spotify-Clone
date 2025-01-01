import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className=' w-6'src='../../src/assets/home.png' alt=''/>
                <p className='font-bold'>Home</p></div>

                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className=' w-6'src='../../src/assets/search.png' alt=''/>
                <p className='font-bold'>search</p></div>
                
    </div>
    <div className='bg-[#121212] h-[95%] rounded'>
        <div className='p-4 flex item-cnter justify-between'>
            <div className='flex items-center gap-3'>
                <img className=' w-8'src='../../src/assets/stack.png' alt=''/>
                <p className='font-semibold'>Your library</p>

            </div>
            <div className='flex items-center gap-3'>
            <img className=' w-5'src='../../src/assets/arrow.png' alt=''/>
            <img className=' w-5'src='../../src/assets/plus.png' alt=''/>
            </div>
        </div>

        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>create your first playlist</h1>
            <p className='font-light'>Its easy we will help you</p>
            <button className='px-4 py-1.5 bg-white text-[15] text-black rounded-full mt-4'>Create playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Lets find some podacast to follow
            </h1>
            <p className='font-light'>we'll keep you update on new episodes.</p>
            <button className='px-4 py-1.5 bg-white text-[15] text-black rounded-full mt-4'>Browse podcasts</button>
        </div>
    </div>
    </div>
  )
}

export default Sidebar
