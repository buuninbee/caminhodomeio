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
          <Button text="Ver mais" path="nobre-caminho-octuplo"/>
        </div>
      </section>

      <article className="mb-8 relative">
        <div className="pb-2">
          <Title title="Tem alguma dúvida? Nós temos respostas." />
        </div>
        <Accordion type="single" collapsible className="w-full relative z-10">
        <AccordionItem value="item-1">
          <AccordionTrigger>Tem algum deus no budismo? </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Budismo acredita em reencarnção?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>O que é karma?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Todo budista tem que ser vegano?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
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

        <div className="grid justify-end">
          <Button text="Ver mais" path="mestres-notaveis" />
        </div>
      </section>
    </main>
    </>
  )
}

export default App
