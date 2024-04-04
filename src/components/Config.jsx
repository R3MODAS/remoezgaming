import { useParams } from "react-router-dom"
import ConfigInfo from "../utils/info.json"

const Config = () => {
  const { id } = useParams()
  const ConfigContent = ConfigInfo.filter((config) => config.id === parseInt(id))

  return (
    <div className='mt-28 container mx-auto relative mb-10 px-3'>
      {
        ConfigContent?.map((config) => (
          <div key={config?.id} className="text-center flex flex-col justify-center items-center gap-2 sm:px-0 w-full">
            <iframe className="lg:w-[1000px] w-full h-[250px] sm:h-[300px] lg:h-[500px]" src={config.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h2 className="sm:text-2xl text-xl font-PoppinsSemi mt-3 sm:mb-1 mb-2 px-10">{config?.name}</h2>
            <a href={config?.config_link} target="_blank" className="bg-red-500 text-white sm:px-5 px-4 h-9 sm:h-11 flex items-center justify-center font-PoppinsMed rounded-lg sm:text-base text-sm uppercase">Config Link</a>
          </div>
        ))
      }
    </div>
  )
}

export default Config