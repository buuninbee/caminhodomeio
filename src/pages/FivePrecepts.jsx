import fivePreceptsBg from "../assets/fivePrecepts.png"
import Title from "@/components/Title"
import Description from "@/components/Description"
import LinkToVideos from "@/components/LinkToVideos"


import {motion} from "motion/react"
import Badge from "@/components/Badge"
import Line from "@/components/Line"
import fiveprecepts from "@/utils/fiveprecepts"

const videosToFivePrecepts = [
    {
      name: 'Os preceitos ensinados por Buda', 
      path: 'https://youtu.be/tgMC5866Knk?si=2EOOOOLKtSw06yhV'
    },
    {
      name: 'Os 5 Preceitos Budistas', 
      path: 'https://youtu.be/DriBcO0u-6A?si=BInLehY3CrFuv7hc'
    },
    {
      name: 'Cinco Preceitos', 
      path: 'https://youtu.be/LZ-IQiUXkbc?si=hc-YMLcQr5zjvUWy'
    },
    {
      name: 'Os cinco preceitos budistas (pañca sīla)', 
      path: 'https://youtu.be/p5LU7-0RDBI?si=706oZuFfKIWjmLFw'
    },
  ]
  


const FivePrecepts = () => {
  return (
    <>
     <div className='grid mt-16 lg:mt-24'>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                }} className="absolute z-10 grid self-end px-4 sm:px-9 lg:px-16">
                <Title title="Os Cinco Preceitos" />
            </motion.div>
            <img className="object-cover z-0 w-full lg:h-[700px] lg:object-fill" src={fivePreceptsBg} alt="Um monge lavando seu prato" />
     </div>

     <main className="px-4 grid sm:px-9 lg:px-16">
        <section className="grid gap-7 justify-center">
          <div>
            <Description description="Os Cinco Preceitos podem parecer negativos, pois indicam o que não se deve fazer, mas não especificam o que se deve fazer. Eles são fundamentais para a ética budista, porém não a compõem por completo. Iniciamos pelo reconhecimento de nossas ações negativas, com o objetivo de cessá-las. É esse o propósito dos Cinco Preceitos. Ao cessar as ações erradas, começamos então a praticar o bem. Tomemos como exemplo o Quarto Preceito: o Buda ensina que devemos primeiro evitar a mentira. Em seguida, devemos nos dedicar à verdade, falar de maneira gentil, educada e no momento apropriado." />
          </div>

          <div className="flex justify-center gap-3 pb-8"> 
              <Line />

              <div className="grid gap-5 py-4 w-auto items-center relative">
                {fiveprecepts.map(({path}, i) => {
                  return(
                    <Badge key={i} number={i + 1} path={path} />
                  )
                })}
              </div>
          </div>
        </section>

        <section className="grid *:pb-8 *:grid ">
            <div>
               <Title title="Para Compreender os Cinco Preceitos" />

               <Description description="Os preceitos são expressos em forma negativa porque o primeiro passo para o crescimento moral é cessar as ações que prejudicam outros seres sencientes. Antes de pensar em como auxiliar o próximo, é essencial parar de causar-lhe dano. A seguir, detalharemos cada um desses preceitos fundamentais." />
            </div>

            <div>
                <Title title="Evitar matar ou ferir seres vivos" />

                <div className="grid gap-4">
                    <Description description="Pergunta: Mas, às vezes não é bom matar? Por exemplo, matar insetos que espalham doenças, ou quando alguém está prestes a matá-lo?" />

                    <Description description="Resposta: Pode ser bom para você, mas e para o inseto ou para a pessoa que você matar? Eles desejam viver tanto quanto você. Quando você decide matar um inseto nocivo, sua intenção provavelmente é uma mistura de autopreservação (bom) e repugnância (ruim). O ato irá beneficiá-lo (bom), mas obviamente não beneficiará o inseto (ruim). Então, às vezes matar é necessário, mas tal ato nunca será inteiramente bom." />

                    <Description description="Pergunta: Vocês budistas se preocupam demais com formigas e insetos." />

                    <Description description="Resposta: Os budistas tentam desenvolver uma compaixão que não discrimina e a tudo alcança. Nós vemos o mundo como um todo unificado em que cada coisa e criatura têm um lugar e uma função. Nós acreditamos que devemos tomar muito cuidado antes de destruir ou perturbar o delicado balanço da natureza. Em todos os lugares onde se deu ênfase em explorar a natureza ao máximo, sugando seus recursos até a última gota sem devolver nada em troca, conquistando-a e subjugando-a, a natureza se revoltou. O ar está se tornando envenenado, os rios estão poluídos e mortos, muitas plantas e animais estão em extinção, as encostas das montanhas estão estéreis e erodidas. Até mesmo o clima está mudando. Se as pessoas fossem um pouco menos ansiosas para esmagar, destruir e matar, essa situação terrível talvez não existisse. Nós devemos lutar para desenvolver um pouco mais de respeito por toda a vida que existe. Essa é a proposta do Primeiro Preceito." />

                    <Description description="Nota: é impossível viver sem causar sofrimento e existe uma certa hierarquia entre os seres, se por exemplo uma criança está com piolhos, sim, é necessário eliminar a praga, mas, devemos pautar a nossa vida de forma a gerar o mínimo de sofrimento possível." /> 
                </div>
            </div>

            <div>
                <Title title="Evitar pegar o que foi não dado" />

                <div className="grid gap-4">
                    <Description description="Pergunta: Conte-me sobre o Segundo Preceito." />

                    <Description description="Resposta: Quando nós aceitamos este Preceito, nós nos comprometemos a jamais tomar qualquer coisa que não seja nossa. O Segundo Preceito relaciona-se a refrear nossa ganância e a respeitar a propriedade dos outros." />
                </div>
            </div>

            <div>
                <Title title="Evitar a má-conduta sexual" />

                <div className="grid gap-4">
                    <Description description="Pergunta: O Terceiro Preceito diz que nós devemos evitar a má-conduta sexual. O que é má-conduta sexual?" />

                    <Description description="Resposta: Se nós usarmos de malandragem, chantagem emocional ou força para levar alguém a praticar sexo conosco, então há má-conduta sexual. O adultério também é uma forma de má-conduta sexual, porque quando nos casamos prometemos a nossa esposa ou esposo que seremos leais. Quando cometemos adultério quebramos essa promessa e traímos a confiança de nosso parceiro. O sexo deveria ser a expressão de amor e intimidade entre duas pessoas, e, quando isto é verdade, ele contribui para nosso bem estar mental e emocional." />
                </div>
            </div>

            <div>
                <Title title="Evitar mentir" />

                <div className="grid gap-4">
                    <Description description="Pergunta: Mas e o Quarto Preceito? É possível viver sem contar mentiras?" />

                    <Description description="Resposta: Se realmente for impossível ser bem sucedido na sociedade ou realizar negócios sem mentir, então esse chocante e corrupto estado das coisas deve ser mudado. O budista é uma pessoa que se decidiu a buscar uma solução prática para esse problema, tentando ser mais verdadeiro e honesto sempre." />
                </div>
            </div>

            <div>
                <Title title="Os Cinco Preceitos" />

                <div className="grid gap-4">
                    <Description description="Pergunta:  O Quinto Preceito diz que não devemos tomar álcool ou outras drogas. Por quê?" />

                    <Description description="Resposta: Raramente as pessoas bebem por prazer, por gosto. Quando se bebe sozinho, busca-se a liberação das tensões, e quando se bebe socialmente, busca-se aceitação e integração ao grupo. Até mesmo uma pequena quantidade de álcool distorce a consciência e deturpa a autoconsciência. Tomado em grandes quantidades, seu efeito pode ser devastador. Os budistas dizem que ao violar o Quinto Preceito, você pode ser levado a transgredir todos os outros Preceitos" />

                    <Description description="Nota: A prática espiritual requer lucidez e clareza mental. Com base nesse princípio, alguns mestres aconselham evitar completamente o álcool, assim como evitamos lamber mel da lâmina de uma faca, enquanto outros sugerem apenas não exceder ao ponto de embriaguez e perda de lucidez." />
                </div>
            </div>

            <div>
                <Title title="E se eu não conseguir cumprir todos os preceitos?" />

                <Description description="É essencial lembrar que os preceitos são guias, não regras rígidas. Cada situação deve ser avaliada em seu contexto geral. A abordagem mais eficaz é aprender os aspectos positivos ensinados por Buda, suas práticas e preceitos, e praticar dentro das nossas possibilidades. Devemos avançar gradualmente, fazendo o que sentimos que podemos fazer no momento. É importante manter um respeito pelas virtudes que ainda não conseguimos alcançar, em vez de simplesmente descartá-las. Uma boa mentalidade é pensar: 'Farei o que estiver ao meu alcance agora, e se algo é bom e ainda está fora do meu alcance, espero poder fazê-lo no futuro'. Ao fazer isso, podemos cultivar uma mentalidade de crescimento e motivação contínua para aprimorar nossas práticas e habilidades, sempre com respeito pelas aspirações que ainda não conseguimos realizar." />
            </div>
        </section>

        <section className="pb-8">
          <Title title="Vídeos relacionados aos cincos preceitos" />

          <ul className="grid gap-4 pt-4">
            {
              videosToFivePrecepts.map(({name, path}, i) => {
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

export default FivePrecepts