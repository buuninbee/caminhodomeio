import fourNobleTruthsBg from "../assets/fourNobleTruths.png"
import Title from "@/components/Title"
import Description from "@/components/Description"
import LinkToVideos from "@/components/LinkToVideos"
import Seo from "@/components/Seo"

import {motion} from "motion/react"
import Badge from "@/components/Badge"
import Line from "@/components/Line"
import fournobletruths from "@/utils/fournobletruths"

const videosToFourNobleTruths = [
    {
      name: 'Conheça as 4 NOBRES VERDADES', 
      path: 'https://youtu.be/Dc2jnSAReGc?si=fYSrm_xMHUki49x7'
    },
    {
      name: 'AS QUATRO NOBRE VERDADES', 
      path: 'https://youtu.be/j9-LnwCNcJY?si=ApUakykT9wElG0zJ'
    },
    {
      name: 'Quatro Nobres Verdades', 
      path: 'https://youtu.be/o55XPqA2e40?si=Cn_wIufX4KhhZ2ca'
    },
    {
      name: '4 nobres verdades', 
      path: 'https://youtu.be/QH8TnN6bs5I?si=zPtDlGiKFIOn3eil'
    },
]
  

const FourNobleTruths = () => {
  return (
    <>
         <Seo title="As Quatros Nobres Verdades - Caminho do meio" description="As quatro nobres verdades são fatos elementares que delimitam o caminho para superarmos nossos problemas. Esse foi o primeiro ensinamento do Buda e é a estrutura básica de todos os demais ensinamentos budistas." img={fourNobleTruthsBg} />
         <div className='grid mt-16 lg:mt-24'>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                }} className="absolute z-10 grid self-end px-4 sm:px-9 lg:px-16">
                <Title title="As quatros nobres verdades" />
            </motion.div>
            <img className="object-cover z-0 w-full lg:h-[700px] lg:object-fill" src={fourNobleTruthsBg} alt="Um grupo de quatro monges crianças andando em um templo" />
     </div>

     <main className="px-4 grid sm:px-9 lg:px-16">
        <section className="grid gap-7 justify-center">
            <div>
                <Description description="As quatro nobres verdades são fatos elementares que delimitam o caminho para superarmos nossos problemas. Esse foi o primeiro ensinamento do Buda e é a estrutura básica de todos os demais ensinamentos budistas." />
            </div>

            <div className="flex justify-center gap-3 pb-8"> 
                <Line />

                <div className="grid gap-5 py-4 w-auto items-center relative">
                    {fournobletruths.map(({path}, i) => {
                    return(
                        <Badge key={i} number={i + 1} path={path} />
                    )
                    })}
                </div>
            </div>
        </section>

        <section className="grid *:pb-8 *:grid">
            <div>
                <Title title="Primeira nobre verdadade" />

                <div className="grid gap-4">
                    <Description description="A primeira verdade é que a vida, em geral, é insatisfatória. Do nascimento à morte, experimentamos muitos momentos felizes, mas eles são efêmeros, e as situações desagradáveis são frequentes:" />

                    <Description description="Infelicidade - doenças, decepções, solidão, ansiedade e insatisfação são facilmente reconhecíveis e compreensíveis. Muitas vezes, elas não estão relacionadas ao momento presente — podemos estar com nosso melhor amigo e saboreando nossa comida predileta e, ainda assim, nos sentir infelizes." />

                    <Description description="Felicidade efêmera - tudo o que nos agrada é passageiro e nunca é plenamente satisfatório, transformando-se rapidamente em sofrimento. Quando sentimos muito frio, buscamos um lugar aquecido, mas em breve sentimos calor e desejamos sair. Seria ideal se a felicidade fosse perene, mas a realidade é que ela é transitória." />

                    <Description description="Problemas recorrentes - o modo como lidamos com os altos e baixos da vida frequentemente acarreta mais problemas. Em um relacionamento problemático, muitas vezes agimos de maneira a piorar a situação. Decidimos nos separar e iniciar um novo relacionamento, mas, por reforçarmos nossos maus hábitos, acabamos repetindo os mesmos padrões, e o novo relacionamento também fracassa." />
                </div>
            </div>

            <div>
                <Title title="Segunda nobre verdadade" />

                <div className="grid gap-4">
                    <Description description="A infelicidade e os momentos passageiros de felicidade não emergem sem causa; eles provêm de uma vasta gama de fatores e condições. Fatores externos, como a sociedade em que vivemos, atuam como condições para o surgimento de nossos problemas; contudo, para compreender a causa raiz, devemos examinar nossa própria mente, conforme ensinou o Buda. Nossas emoções perturbadoras, como raiva, inveja e ganância, impulsionam-nos a pensar, falar e agir de maneira compulsiva e destrutiva." />

                    <Description description="O Buda percebeu ainda mais profundamente, identificando a verdadeira causa de nossos estados emocionais: a maneira como entendemos a realidade. Falta-nos consciência, ou temos uma compreensão distorcida, dos efeitos a longo prazo de nosso comportamento, e mantemos uma percepção equivocada sobre como nós, os outros e o mundo existimos. Em vez de reconhecermos a interconexão de todas as coisas, tendemos a vê-las como entidades autônomas, independentes de fatores externos." />
                </div>
            </div>

            <div>
                <Title title="Terceira nobre verdadade" />

                <Description description="Buda ensinou que o sofrimento é desnecessário se eliminarmos sua causa. Ao dissiparmos a confusão sobre a realidade, impediremos o surgimento de problemas. Ele afirmou que, ao fazer isso, não apenas problemas isolados, mas todos os problemas cessarão e não daremos origem a novos." />
            </div>

            <div>
                <Title title="Quarta nobre verdadade" />

                <div className="grid gap-4">
                    <Description description="Para superarmos a ingenuidade e a falta de consciência, é necessário compreender o que se opõe a isso, que é o nobre caminho octuplo." />

                    <Description description="Quando a vida nos decepciona, tendemos a buscar distração: beber e comer excessivamente sem considerar as consequências a longo prazo. Se isso se tornar um hábito, podemos prejudicar gravemente nossa saúde, comprometer nossa vida e impactar negativamente nossa família. Por trás desse comportamento está a crença de que somos completamente independentes das consequências de nossos atos." />

                    <Description description=" O antídoto mais eficaz para essa ilusão é: Reconhecer que estamos profundamente ligados ao restante da humanidade e ao planeta, e compreender que nossas ilusões sobre nossa existência não refletem a realidade." />

                    <Description description="Se nos habituarmos a essa percepção por meio de meditação constante, eventualmente desvendaremos a confusão que alimenta nossas projeções ilusórias." />

                    <Description description="Todos almejamos a felicidade, mas ela frequentemente nos escapa. A abordagem de Buda sobre a felicidade — expressa nas Quatro Nobres Verdades — é universal e continua pertinente 2500 anos após sua concepção." />

                    <Description description="Não é necessário ser budista para aplicar as Quatro Nobres Verdades aos nossos problemas. As coisas podem não ocorrer como desejamos, mas isso não deve ser motivo para depressão ou perda de esperança. Para alcançar uma felicidade autêntica e dar um significado verdadeiro às nossas vidas, basta seguir as Quatro Nobres Verdades." />

                    <Description description="Em resumo, devemos estar conscientes da existência do sofrimento real, eliminar sua verdadeira causa e alcançar o verdadeiro cessar" />
                </div>
            </div>

            <div>
                <Title title="A importancia das 4 nobres verdades" />

                <Description description="As Quatro Nobres Verdades representam os primeiros e também os últimos ensinamentos de Buda. Próximo ao momento de sua morte, Buda instruiu seus discípulos que, caso houvesse alguma dúvida sobre a validade dessas verdades, deveriam falar, para que pudessem receber as respostas antes que fosse muito tarde. A dedicação de Buda às Quatro Nobres Verdades durante os 45 anos de ensino sublinha a significância que ele conferia a esses princípios." />
            </div>
        </section>

        <section className="pb-8">
          <Title title="Videos relacionados sobre os as quatros nobres verdades" />

          <ul className="grid gap-4 pt-4">
            {
              videosToFourNobleTruths.map(({name, path}, i) => {
                return(
                <li key={i}>
                  <LinkToVideos title={name} path={path} />
                </li>
                )
              })
            }
          </ul>
        </section>
     </main>
    </>
  )
}

export default FourNobleTruths