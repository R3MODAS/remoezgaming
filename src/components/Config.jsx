import ConfigInfo from "../utils/info.json"

const Config = () => {
  return (
    <div className='mt-28 container mx-auto'>
      {
        ConfigInfo?.map((config) => (
          <div key={config?.id} className="text-center flex flex-col justify-center items-center gap-2 sm:px-0 w-full">
            <video src={config?.video} loop controls muted className="w-[1000px]" />
            <h2 className="sm:text-2xl text-xl font-PoppinsSemi mt-2 sm:mb-1 mb-2">{config?.name}</h2>
            <a href={config?.config_link} target="_blank" className="bg-red-500 text-white sm:px-5 px-4 h-9 sm:h-11 flex items-center justify-center font-PoppinsMed rounded-lg sm:text-base text-sm">Config Link</a>
          </div>
        ))
      }
    </div>
  )
}

export default Config