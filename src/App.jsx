import budaHome from './assets/budaHome.png'
import budaBackground from './assets/budaBackground.svg'

import Title from "./components/Title"
import Description from "./components/Description"
import Badge from "./components/Badge"
import eightfoldPath from "./utils/eightfoldPath"
import Line from "./components/Line"
import Button from "./components/Button"

import {motion} from "motion/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Card from "./components/Card"
import Footer from './components/Footer'



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
            <h1 className="text-xl font-sans text-center text-white sm:text-3xl lg:text-5xl">Seja uma ilha para você mesmo, esforçe-se com rapidez e 
            torne-se sábio.</h1>
            <p className="text-white font-serif text-xs text-center italic sm:text-lg lg:text-2xl">Buda Sakyamuni, 2600 anos atrás - Dhammapada Verso 238</p>
        </motion.div>

        <img className="object-cover z-0 w-full lg:h-[700px] lg:object-fill" src={budaHome} alt="Buda junto com seus discipulos" />
    </div>

    <main className="px-4 grid sm:px-9 lg:px-16">
      <section className="grid gap-7 pb-8">
        <div>
          <Title title="Budismo" />
          <Description description='Buda Shakyamuni, também conhecido como Siddhartha Gautama, foi o fundador do budismo. Ele nasceu em uma família real no que é hoje o Nepal, por volta de 563 a.C. Como jovem príncipe, Siddhartha teve uma vida confortável e protegida, mas um dia decidiu sair do palácio para explorar o mundo exterior. Durante sua jornada, ele testemunhou a velhice, a doença e a morte, o que o levou a uma profunda crise existencial. Siddhartha então iniciou uma busca espiritual pela verdade e pelo significado da vida. Ele estudou com vários mestres e praticou diversas formas de meditação e ascetismo, mas não encontrou a resposta que buscava. Foi então que, sentado debaixo de uma árvore em meditação profunda, ele finalmente alcançou o despertar e se tornou Buda, ou seja, "o desperto". A partir daí, Buda Shakyamuni passou a ensinar o Dharma, ou seja, os ensinamentos sobre a natureza da realidade e a forma de alcançar a libertação do sofrimento. Ele viajou por toda a região, pregando o caminho do meio, que consiste em evitar tanto a indulgência quanto a mortificação, e ensinando as Quatro Nobres Verdades e o Nobre Caminho Óctuplo. Sua mensagem foi amplamente difundida e teve um impacto significativo na Índia e em outros países asiáticos, onde o budismo se espalhou e se desenvolveu em diferentes tradições.' />
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
          <Button text="Ver mais" path="nobre-caminho-octuplo"/>
        </div>
      </section>

      <article className="mb-8 relative sm:mb-16">
        <div className="pb-2 ">
          <Title title="Tem alguma dúvida? Nós temos respostas." />
        </div>
        <Accordion type="single" collapsible className="w-full relative z-10">
        <AccordionItem value="item-1">
          <AccordionTrigger>O Buda era um Deus? </AccordionTrigger>
          <AccordionContent>
          Não, não era. Ele não afirmava ser um Deus, nem o filho de um Deus, nem 
          o mensageiro de um Deus. Ele era um ser humano que se tornou que 
          se aperfeiçoou a si próprio e ensinou que se nós seguirmos
          seu exemplo podemos também nos aperfeiçoar
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>O Budismo tem um código moral? </AccordionTrigger>
          <AccordionContent>
          Sim, tem. Os Cinco Preceitos são a base da moral budista. O Primeiro 
          Preceito é evitar matar ou ferir seres vivos; o Segundo é evitar roubar; o Terceiro é 
          evitar a má-conduta sexual; o Quarto é evitar mentir; e o Quinto é evitar o álcool e 
          outras drogas intoxicantes
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Quais são os principais ensinamentos do Buda? </AccordionTrigger>
          <AccordionContent>
          Todos os muitos ensinamentos do Buda estão centrados nas Quatro 
          Nobres Verdades, assim como o aro e as traves de uma roda se centram no eixo. Elas 
          são chamadas de “Quatro”, porque totalizam quatro, são chamadas de “Nobres”, 
          porque enobrecem quem as compreende, e são chamadas de “Verdades” porque, 
          na medida em que correspondem à realidade, são verdadeiras
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Todo budista tem que ser vegetariano?</AccordionTrigger>
          <AccordionContent>
          Não necessariamente. O Buda não era vegetariano, ele não ensinou os 
          seus discípulos a serem vegetarianos e mesmo nos dias de hoje muitos bons budistas 
          não são vegetarianos. Nas escrituras budistas está dito:
          </AccordionContent>
          <AccordionContent>
          Ser grosso, impiedoso, vingativo, irascível, 
          Ter o coração malévolo, arrogante e ganancioso – isto 
          Torna alguém impuro, e não comer carne. 
          Manter conduta imoral, não pagar suas dívidas, 
          Trapacear nos negócios, causar divisões entre as pessoas – 
          Isto torna alguém impuro, e não comer carne. Sn. 246-7
          </AccordionContent>
        </AccordionItem>
        </Accordion>
        <img className="object-cover z-0 w-auto h-full absolute top-20 -right-4" src={budaBackground} alt="BUda junto com seus discipulos" />
      </article>

      <section className="pb-8">
        <div>
          <Title title="Mestres notaveis" />
        </div>

        <div className='mb-2'>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-2/3">
              <div className="w-auto h-auto">
                <Card img="src/assets/Thich-Nhat-Hanh.jpg" name="Thich nhat hanh" tag="Zen" />
              </div>
              </CarouselItem>
              <CarouselItem className="basis-2/3">
                <div className="w-auto h-auto">
                <Card img="src/assets/Thich-Nhat-Hanh.jpg" name="Thich nhat hanh" tag="Zen" />
              </div>
              </CarouselItem>
              <CarouselItem className="basis-2/3">
                <div className="w-auto h-auto">
                <Card img="src/assets/Thich-Nhat-Hanh.jpg" name="Thich nhat hanh" tag="Zen" />
              </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        {/* <div className="grid justify-end">
          <Button text="Ver mais" path="mestres-notaveis" />
        </div> */}
      </section>

    </main>

    <Footer/>
    </>
  )
}

export default App
