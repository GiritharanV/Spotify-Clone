import React, { useContext } from 'react'
import { songsData } from '../../src/assets/assets'
import { PlayerContext } from '../Context/Playercontext'

const Player = () => {
    const {track,seekbar,seekbg,playerstatus,play,pause,time,previous,next,seeksong} = useContext(PlayerContext)
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt=""/>
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p> 
            </div>
        </div>
        <div className='flex felx-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src='../../src/assets/shuffle.png' alt=''/>
                <img onClick={previous} className='w-4 cursor-pointer' src='../../src/assets/prev.png' alt=''/>
                {
                    playerstatus ? <img onClick={pause} className='w-4 cursor-pointer' src='../../src/assets/pause.png' alt=''/>
:                 <img onClick={play} className='w-4 cursor-pointer' src='../../src/assets/play.png' alt=''/>

                }

                <img onClick={next} className='w-4 cursor-pointer' src='../../src/assets/next.png' alt=''/>
                <img className='w-4 cursor-pointer' src='../../src/assets/loop.png' alt=''/>
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div  ref={seekbg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekbar} className='h-1 border-none w-full bg-green-800 rounded-full'/>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src='../../src/assets/plays.png' alt=''/>
            <img className='w-4' src='../../src/assets/mic.png' alt=''/>
            <img className='w-4' src='../../src/assets/queue.png' alt=''/>
            <img className='w-4' src='../../src/assets/speaker.png' alt=''/>
            <img className='w-4' src='../../src/assets/volume.png' alt=''/>
            <div className='w-20 bg-slate-50 h-1 rounded'></div>
            <img className='w-4' src='../../src/assets/mini.png' alt=''/>
            <img className='w-4' src='../../src/assets/zoom.png' alt=''/>



        </div>

       
        
      
    </div>
  )
}

export default Player
