import {motion} from "motion/react"
import budaHome from './assets/budaHome.png'
import Title from "./components/Title"
import Description from "./components/Description"
import Badge from "./components/Badge"
import eightfoldPath from "./utils/eightfoldPath"
import Line from "./components/Line"


function App() {
  return (
    <>
    <div className='grid'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
            }} className="absolute z-10 grid self-end justify-self-center px-3 pb-6 gap-2">
            <h1 className="text-xl font-sans text-center text-white">Seja uma ilha para você mesmo, esforçe-se com rapidez e 
            torne-se sábio.</h1>
            <p className="text-white font-serif text-xs text-center">Buda Sakyamuni, 2600 anos atrás - Dhammapada Verso 238</p>
        </motion.div>

        <img className="object-cover z-0 w-full" src={budaHome} alt="BUda junto com seus discipulos" />
    </div>

    <main className="px-4 grid">
      <section className="grid gap-7 pb-8">
        <div>
          <Title title="Budismo" />
          <Description description='Buda Shakyamuni, também conhecido como Siddhartha Gautama, foi o fundador do budismo. Ele nasceu em uma família real no que é hoje o Nepal, por volta de 563 a.C. Como jovem príncipe, Siddhartha teve uma vida confortável e protegida, mas um dia decidiu sair do palácio para explorar o mundo exterior. Durante sua jornada, ele testemunhou a velhice, a doença e a morte, o que o levou a uma profunda crise existencial. Siddhartha então iniciou uma busca espiritual pela verdade e pelo significado da vida. Ele estudou com vários mestres e praticou diversas formas de meditação e ascetismo, mas não encontrou a resposta que buscava. Foi então que, sentado debaixo de uma árvore em meditação profunda, ele finalmente alcançou a iluminação e se tornou Buda, ou seja, "o desperto".A partir daí, Buda Shakyamuni passou a ensinar o Dharma, ou seja, os ensinamentos sobre a natureza da realidade e a forma de alcançar a libertação do sofrimento. Ele viajou por toda a região, pregando o caminho do meio, que consiste em evitar tanto a indulgência quanto a mortificação, e ensinando as Quatro Nobres Verdades e o Nobre Caminho Óctuplo. Sua mensagem foi amplamente difundida e teve um impacto significativo na Índia e em outros países asiáticos, onde o budismo se espalhou e se desenvolveu em diferentes tradições.' />
        </div>

        <div>
          <Title title='Afinal, quem é o Buda?' />
          <Description description='Buda Shakyamuni, também conhecido como Siddhartha Gautama, foi o fundador do budismo. Ele nasceu em uma família real no que é hoje o Nepal, por volta de 563 a.C. Como jovem príncipe, Siddhartha teve uma vida confortável e protegida, mas um dia decidiu sair do palácio para explorar o mundo exterior. Durante sua jornada, ele testemunhou a velhice, a doença e a morte, o que o levou a uma profunda crise existencial. Siddhartha então iniciou uma busca espiritual pela verdade e pelo significado da vida. Ele estudou com vários mestres e praticou diversas formas de meditação e ascetismo, mas não encontrou a resposta que buscava. Foi então que, sentado debaixo de uma árvore em meditação profunda, ele finalmente alcançou a iluminação e se tornou Buda, ou seja, "o desperto".A partir daí, Buda Shakyamuni passou a ensinar o Dharma, ou seja, os ensinamentos sobre a natureza da realidade e a forma de alcançar a libertação do sofrimento. Ele viajou por toda a região, pregando o caminho do meio, que consiste em evitar tanto a indulgência quanto a mortificação, e ensinando as Quatro Nobres Verdades e o Nobre Caminho Óctuplo. Sua mensagem foi amplamente difundida e teve um impacto significativo na Índia e em outros países asiáticos, onde o budismo se espalhou e se desenvolveu em diferentes tradições.' />
        </div>

        <div>
          <Title title='Tem livro sagrado do budismo?' />
          <Description description='Buda Shakyamuni, também conhecido como Siddhartha Gautama, foi o fundador do budismo. Ele nasceu em uma família real no que é hoje o Nepal, por volta de 563 a.C. Como jovem príncipe, Siddhartha teve uma vida confortável e protegida, mas um dia decidiu sair do palácio para explorar o mundo exterior. Durante sua jornada, ele testemunhou a velhice, a doença e a morte, o que o levou a uma profunda crise existencial. Siddhartha então iniciou uma busca espiritual pela verdade e pelo significado da vida. Ele estudou com vários mestres e praticou diversas formas de meditação e ascetismo, mas não encontrou a resposta que buscava. Foi então que, sentado debaixo de uma árvore em meditação profunda, ele finalmente alcançou a iluminação e se tornou Buda, ou seja, "o desperto".A partir daí, Buda Shakyamuni passou a ensinar o Dharma, ou seja, os ensinamentos sobre a natureza da realidade e a forma de alcançar a libertação do sofrimento. Ele viajou por toda a região, pregando o caminho do meio, que consiste em evitar tanto a indulgência quanto a mortificação, e ensinando as Quatro Nobres Verdades e o Nobre Caminho Óctuplo. Sua mensagem foi amplamente difundida e teve um impacto significativo na Índia e em outros países asiáticos, onde o budismo se espalhou e se desenvolveu em diferentes tradições.' /> 
        </div>
      </section>

      <section>
        <div className="grid justify-center gap-3 pb-10">
          <Title title="O nobre caminho óctuplo" />
        <div className="flex gap-3"> 
            <Line />

            <div className="grid gap-5 py-4 w-full items-center relative">
              {eightfoldPath.map(({path}, i) => {
                return(
                  <Badge key={i} number={i + 1} path={path} />
                )
              })}
            </div>
        </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
