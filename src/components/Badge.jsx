const Badge = ({number, path}) => {
  return (
    <div className="flex gap-3 py-2 rounded-md bg-onSurface text-lg font-serif justify-center items-center">
        <h3 className="text-segundary">{number}- </h3>
        <p className="text-primary ">{path}</p>
    </div>
  )
}

export default Badge