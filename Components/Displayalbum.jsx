import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData } from '../assets/assets';
import { useContext } from 'react';
import { PlayerContext } from '../Context/Playercontext';

const Displayalbum = () => {
    const {id} = useParams();
    const albumdata = albumsData[id]
const {playwithid} = useContext(PlayerContext)
  return (
    <>
      <Navbar/>
      <div className='mt-10 flex gap-8 felx-col md:flex-row md:items-end'>
        <img className='w-48 rounded ' src={albumdata.image} alt=''/>
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumdata.name}</h2>
            <h4>{albumdata.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5' src='../../src/assets/spotify_logo.png' alt=''/>
                <b>spotify</b>
                .1,223,432 likes
                <b>50 songs,</b>
                about 2 hr 30 min
              
            </p>
        </div>
      </div>
      <div className='grid gird-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p>
            <b className='mr-4'> #</b>Title
        </p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src='../../src/assets/clock_icon.png' alt=''/>
      </div>
      <hr />
      {
        songsData.map((item,index)=>(
            <div onClick={()=>playwithid(item.id)} key={index}className='grid grid-cols-3 sm:grid-cols-4 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
<p className='text-white'>
    <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
    <img className='inline w-10 mr-5' src={item.image} alt=''/>
    {item.name}
</p>
<p className='tetx-[15px] '>{albumdata.name}</p>
<p className='text-[15px] hidden sm:block'>5 days ago</p>
<p className='text-[15px] text-center'>{item.duration}</p>
            </div>
        )
        )
      }
    </>
  )
}

export default Displayalbum
