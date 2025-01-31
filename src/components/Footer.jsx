import mongeMeditando from "../assets/mogeMeditando.svg"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900/25 py-6 px-4 
    grid grid-cols-3 grid-rows-auto md:px-8 xl:px-12">
        <div className=" text-primary col-span-3 grid gap-2 sm:gap-5">
            <h2 className="font-serif text-2xl pr-2 sm:text-4xls md:text-4xl lg:text-5xl">“Seja a mudança que você quer ver no mundo”</h2>

            <div>
                <h3 className="text-lg sm:text-2xl">Contato</h3>
                <a className="text-sm sm:text-xl hover:text-gray-300 cursor-pointer" href="mailto:budismobrasil8@gmail.com">budismobrasil8@gmail.com</a>
            </div>
        </div>
        <div className="row-start-2 col-start-2 col-span-2 grid">
            <img className="w-full h-auto sm:w-80 justify-self-end" src={mongeMeditando} alt="" />
        </div>
    </footer>
  )
}

export default Footer