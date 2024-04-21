import { Link } from 'react-router-dom'
import Config from "../utils/config.json"

const Home = () => {
  return (
    <div className='mt-28 container mx-auto px-4 mb-10'>
      <h1 className='font-GreatVibesReg text-6xl text-center'>Config files</h1>
      <div className='config-cards mt-12 flex items-center gap-12 flex-wrap justify-center'>
        {
          Config.map((item) => (
            <Link key={item?.id} to={`/config/${item?.id}`} className="config-card hover:scale-95 transition-all cursor-pointer">
              <div className='sm:w-[400px] w-80 sm:h-56 rounded-lg'>
                <img loading='lazy' className='w-full h-full rounded-lg object-cover' src={item?.thumbnail} alt="evil-within" />
              </div>
              <h2 className='font-PoppinsSemi text-base mt-2'>{item?.name}</h2>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home