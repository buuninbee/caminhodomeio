import cn from "@/utils/cn"

const defaultTag = 'px-3 py-2 rounded-md sm:text-xl md:text-2xl'
const traditions = {
  'Zen': "text-blue-700 bg-blue-700/20",
  'Theravada': "text-red-600 bg-red-600/20",
  'Geral': "text-neutral-50 bg-neutral-200/20",
  'Tibetano': "text-yellow-300 bg-yellow-500/20",
  'Terra Pura': "text-green-400 bg-green-500/20"
}

const Tag = ({children, tradition}) => {
  return (
    <span className={cn(defaultTag, traditions[tradition])}>{children}</span>
  )
}

export default Tag