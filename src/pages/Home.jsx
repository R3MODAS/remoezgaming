import React from 'react'
import { Link } from 'react-router-dom'
import Config from "../utils/config.json"

const Home = () => {
  return (
    <div className='mt-28 container mx-auto px-4'>
      <h1 className='font-PoppinsBold text-3xl'>Config Files</h1>
      <div className='config-cards mt-8 flex items-center'>
        {
          Config.map((item) => (
            <Link key={item?.id} to={`/config/${item?.id}`} className="config-card hover:scale-95 transition-all w-80 cursor-pointer">
              <img className='w-full h-full rounded-lg' src={item?.thumbnail} alt="evil-within" />
              <h2 className='font-PoppinsSemi text-base mt-2'>{item?.name}</h2>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home