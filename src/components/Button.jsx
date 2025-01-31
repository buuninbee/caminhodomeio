import { NavLink } from "react-router"

const Button = ({text, path}) => {
  return (
    <button className="text-base font-sans justify-self-center 
    bg-segundary text-onPrimary rounded-md hover:bg-amber-400 
    py-2 px-5 sm:px-8 sm:py-3 sm:text-xl">
        <NavLink to={`/${path}`}>
        {text}
        </NavLink>
    </button>
  )
}

export default Button