import circledPlay from "../assets/circledPlay.svg"

const LinkToVideos = ({title, path}) => {
  return (
    <>
      <a className="flex items-center cursor-pointer w-max" href={path} target="_blank" rel="noopener noreferrer">
        <img className="w-auto h-6" src={circledPlay} alt={title} />
        <p className="text-segundary hover:text-amber-400 text-base underline md:text-lg lg:text-xl">{title}</p> 
      </a>
    </>
  )
}

export default LinkToVideos