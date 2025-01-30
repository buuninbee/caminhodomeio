const Badge = ({number, path}) => {
  return (
    <div className="flex gap-3 py-2 rounded-lg bg-onSurface text-lg font-serif justify-center sm:py-3 sm:text-xl md:py-4">
        <h3 className="text-segundary">{number} - </h3>
        <p className="text-primary ">{path}</p>
    </div>
  )
}

export default Badge