import Tag from "./Tag"

const Card = ({img, name, tag}) => {
  return (
    <div className="relative w-[360px] overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img alt=""
            src={img}
            className="absolute rounded-xl bg-center bg-cover inset-0 h-full w-full object-cover"
        />

        <div className="relative h-96 grid bg-gradient-to-t from-black/95 to-from-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6 grid grid-rows-1 sm:gap-2">
            <h3 className="mt-0.5 text-lg text-white content-end sm:text-2xl">{name}</h3>

            <Tag tradition={tag}>{tag}</Tag>
            </div>
        </div>
    </div>
  )
}

export default Card