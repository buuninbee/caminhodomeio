import { useState } from "react"
import budaLogo from "../assets/budaLogo.svg"
import downArrow from "../assets/downArrow.svg"
import upArrow from "../assets/upArrow.svg"
import openIcon from "../assets/openIcon.svg"
import closeIcon from "../assets/closeIcon.svg"


import { NavLink } from "react-router"

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [dropMenu, setDropmenu] = useState(false)

  return (
    <header className="bg-transparent/95 fixed w-full z-20 top-0">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-4">
            <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12 ">
                    <NavLink className="block" to="/">
                        <img className={`w-12 h-full ${openMenu ? "block" : "hidden"} lg:w-16 lg:block`} src={budaLogo} alt="A logo do buda em meditaçãos" />
                    </NavLink>
                </div>

                <div className='hidden md:block'>
                    <nav aria-label="Global">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <NavLink className="text-primary transition hover:text-gray-300 md:text-lg" to="meditacao">Meditação</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-primary transition hover:text-gray-300 md:text-lg" to="livros">Livros</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-primary transition hover:text-gray-300 md:text-lg" to="mestres-notaveis">Mestres notáveis</NavLink>
                            </li>
                            <li className="text-primary transition hover:text-gray-300 md:text-lg grid grid-cols-auto gap-2 relative cursor-pointer" onMouseEnter={() => {setDropmenu(!dropMenu)}}>
                                Fundamentos do budismo
                                <img className="w-3 h-full col-start-2" src={`${dropMenu ? upArrow : downArrow }`} alt="" />
                                <ul className={`absolute w-full top-6 bg bg-transparent/95 py-3 px-5 flex-col gap-2 ${dropMenu ? "flex" : "hidden"}`}>
                                    <li className="border-b border-gray-800">
                                        <NavLink className="text-primary transition hover:text-gray-300" to="nobre-caminho-octuplo">O nobre caminho</NavLink>
                                    </li>
                                    <li className="border-b border-gray-800">
                                        <NavLink className="text-primary transition hover:text-gray-300" to="cinco-preceitos">Os 5 preceitos</NavLink>
                                    </li>
                                    <li className="border-b border-gray-800">
                                        <NavLink className="text-primary transition hover:text-gray-300" to="tres-joias">As 3 jóias</NavLink>
                                    </li>
                                    <li className="border-b border-gray-800">
                                        <NavLink className="text-primary transition hover:text-gray-300" to="karma">Karma</NavLink>
                                    </li>
                                    <li className="border-b border-gray-800">
                                        <NavLink className="text-primary transition hover:text-gray-300" to="quatros-nobres-verdades">As 4 nobres verdades</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="text-primary transition hover:text-gray-300" to="tres-venenos-mentais">Os 3 venenos mentais</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='w-full grid md:hidden'>
                    <nav className={`col-span-3 relative ${openMenu ? "hidden" : "grid"} `} aria-label="Global">
                        <ul className="flex w-screen h-screen justify-self-center bg-transparent/95 flex-col pl-8 pt-9 items-left absolute gap-3 text-2xl">
                            <li>
                                <NavLink className="text-primary transition hover:text-gray-300 md:text-lg" to="meditacao">Meditação</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-primary transition hover:text-gray-300 md:text-lg" to="livros">Livros</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-primary transition hover:text-gray-300 md:text-lg" to="mestres-notaveis">Mestres notaveis</NavLink>
                            </li>
                            <li className="text-primary transition hover:text-gray-300 md:text-lg grid grid-cols-auto gap-2 relative" onClick={() => {setDropmenu(!dropMenu)}}>
                                Fundamentos do budismo
                                <img className="w-3 h-full col-start-2" src={`${dropMenu ? downArrow : upArrow }`} alt="" />
                                <ul className={`flex flex-col w-full top-6 ml-4 gap-2 ${dropMenu ? "hidden" : "flex"} `}>
                                    <li>
                                        <NavLink className="text-primary transition hover:text-gray-300" to="nobre-caminho-octuplo">O nobre caminho</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="text-primary transition hover:text-gray-300" to="cinco-preceitos">Os 5 preceitos</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="text-primary transition hover:text-gray-300" to="tres-joias">As 3 jóias</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="text-primary transition hover:text-gray-300" to="karma">Karma</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="text-primary transition hover:text-gray-300" to="quatros-nobres-verdades">As 4 nobres verdades</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="text-primary transition hover:text-gray-300" to="tres-venenos-mentais">Os 3 venenos mentais</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex row-start-1 col-span-3 items-center justify-end gap-4">
                        <div className="block md:hidden">
                            <button
                                className="rounded-sm bg-black p-2 text-gray-600 transition hover:text-gray-600/75"
                            onClick={() => setOpenMenu(!openMenu)}
                            >
                               <img className="w-6 h-auto"  src={`${openMenu ? openIcon : closeIcon }`} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Nav