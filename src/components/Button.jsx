import { NavLink } from "react-router"
import cn from "../utils/cn"

const defaultButtonClasses = "text-lg font-sans justify-self-center rounded-md py-3 px-5 sm:px-8 sm:py-3 sm:text-xl";

const variants = {
  'filled': "bg-segundary text-onPrimary hover:bg-amber-400",
  'outline': "text-primary underline decoration-amber-400"
};


const Button = ({text, path, variant = "filled"}) => {
  return (
    <button className={cn(defaultButtonClasses, variants[variant])}>
        <NavLink to={`/${path}`}>
        {text}
        </NavLink>
    </button>
  )
}

export default Button