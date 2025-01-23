import { NavLink } from "react-router"

const Button = ({text, path}) => {
  return (
    <button className="text-base font-sans justify-self-center 
    bg-segundary text-onPrimary rounded-md 
    py-2 px-5">
        <NavLink to={`/${path}`}>
        {text}
        </NavLink>
    </button>
  )
}

export default Button