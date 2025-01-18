import budaHome from './assets/budaHome.png'

function App() {
  return (
    <>
    <div className='grid'>
        <div className="absolute z-10 grid self-end justify-self-center px-3 pb-6 gap-2">
            <h1 className="text-xl font-sans text-center text-white">Seja uma ilha para você mesmo, esforçe-se com rapidez e 
            torne-se sábio.</h1>
            <p className="text-white font-serif text-xs text-center">Buda Sakyamuni, 2600 anos atrás - Dhammapada Verso 238</p>
        </div>

        <img className="object-cover z-0 w-full" src={budaHome} alt="BUda junto com seus discipulos" />
    </div>

    
    </>
  )
}

export default App
