const Card = ({img, name, tag}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
            alt=""
            src={img}
            className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative h-96 grid bg-gradient-to-t from-slate-900/50 to-slate-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6 grid grid-rows-1">
            <h3 className="mt-0.5 text-lg text-white content-end">{name}</h3>

            <p className="line-clamp-3 text-sm/relaxed text-white/95">{tag}</p>
            </div>
        </div>
    </div>
  )
}

export default Card