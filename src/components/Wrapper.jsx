const Wrapper = ({title, description, img, alt}) => {
  return (
    <div>
        <div className="absolute z-10 px-3 pt-28 grid gap-3'">
            <h1 className="text-xl font-sans text-center text-white">{title}</h1>
            <p className="text-white font-serif text-sm text-center">{description}</p>
        </div>

        <img className="object-cover z-0" src={img} alt={alt} />
    </div>
  )
}

export default Wrapper