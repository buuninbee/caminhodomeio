import karmaBg from "../assets/karma.png"
import Title from "@/components/Title"
import Description from "@/components/Description"
import LinkToVideos from "@/components/LinkToVideos"
import Seo from "@/components/Seo"


import {motion} from "motion/react"

const videosToKarma = [
    {
      name: 'Entendendo o karma', 
      path: 'https://youtu.be/onLojqQ4DBM?si=LbST0DKrqL__R3yk'
    },
    {
      name: 'Karma não é bom ou ruim', 
      path: 'https://youtu.be/9o4Mcvcl0WQ?si=R-VPYeT0yCjq-xxs'
    },
    {
      name: 'karma na visão budista', 
      path: 'https://youtu.be/cBWqbFGuCec?si=Z-5-3_ToCfvCxiWZ'
    }
]

const Karma = () => {
  return (
    <>
    <Seo title="Karma - Caminho do meio" description="Karma é um termo amplamente reconhecido, mas frequentemente mal interpretado no Ocidente. Muitos acreditam que se refere ao 'destino' ou a uma forma de justiça cósmica. Contudo, essa não é a visão budista sobre o karma, que é mais complexa e relacionada às ações e suas consequências, não sendo um simples mecanismo de recompensa ou punição." img={karmaBg} />
    <div className='grid mt-12'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
            }} className="absolute z-10 grid self-end px-4 sm:px-9 lg:px-16">
            <Title title="Karma" />
        </motion.div>
        <img className="object-cover z-0 w-full lg:h-[700px] lg:object-fill" src={karmaBg} alt="Um grupo de monges na floresta" />
    </div>

    <main  className="px-4 grid sm:px-9 lg:px-16">
        <section className="grid gap-7 pb-8 justify-center">
            <div>
                <Description description="Karma é um termo amplamente reconhecido, mas frequentemente mal interpretado no Ocidente. Muitos acreditam que se refere ao 'destino' ou a uma forma de justiça cósmica. Contudo, essa não é a visão budista sobre o karma, que é mais complexa e relacionada às ações e suas consequências, não sendo um simples mecanismo de recompensa ou punição." />
            </div>
        </section>

        <section className="grid *:pb-8 *:grid">
            <div>
                <Title title="Karma não é maldição!" />

                <Description description="Karma é um termo sânscrito que se traduz por 'ação'. No contexto budista, karma refere-se especificamente à ação intencional ou volitiva. As escolhas que fazemos em nossas ações, palavras e pensamentos iniciam o fluxo do karma. Assim, a lei do karma no budismo é uma lei de causa e efeito. Ocidentalmente, o termo karma é frequentemente usado para descrever as consequências do karma. Por exemplo, pode-se dizer que John perdeu o emprego como resultado de seu 'karma'. Contudo, na perspectiva budista, karma é a ação em si, e não suas consequências. Estas são referidas como os 'frutos' ou 'resultados' do karma. Embora os conceitos de karma tenham suas raízes no hinduísmo, os budistas têm uma interpretação ligeiramente distinta. O Buda histórico, que viveu há 26 séculos nas regiões que hoje conhecemos como Nepal e Índia, inicialmente buscou ensinamentos com mestres hindus. No entanto, ele expandiu esses ensinamentos em direções novas e distintas em sua jornada para a iluminação." />
            </div>

            <div>
                <Title title="O Potencial Libertador do Karma" />

                <div className="grid gap-4">
                    <Description description="Portanto, em vez de fomentar uma impotência resignada, a concepção budista original de carma enfatizava o potencial libertador das ações da mente em cada instante. Quem você é ou de onde vem não é tão relevante quanto as intenções da mente no presente. Embora o passado possa ser responsável por muitas desigualdades observadas na vida, o que nos define como seres humanos não é a situação inicial que recebemos, pois ela pode mudar a qualquer momento. Avaliamos a nós mesmos pela habilidade com que lidamos com as circunstâncias atuais. Se você está sofrendo, esforce-se para não perpetuar os padrões mentais prejudiciais que sustentam esse ciclo cármico específico. Se notar que outros estão sofrendo e puder ajudar, concentre-se não no carma passado deles, mas na sua oportunidade cármica atual: você pode se encontrar na mesma situação deles no futuro, então esta é a sua chance de agir como gostaria que agissem com você nesse momento." />

                    <Description description="Essa visão de que a dignidade de uma pessoa é definida não pelo seu passado, mas por suas ações atuais, desafiou as tradições indianas de hierarquias baseadas em castas e explica por que os primeiros budistas ridicularizavam as pretensões e mitologias dos brâmanes. Como o Buda apontou, um brâmane poderia ser uma pessoa superior não porque ele saiu de um útero brâmane, mas apenas se ele agisse com intenções verdadeiramente hábeis." />
                </div>
            </div>

            <div>
                <Title title="O que você faz é o que acontece com você" />

                <Description description="Quando parecemos presos em padrões antigos e destrutivos, pode não ser o carma do passado que está nos deixando presos. Se estivermos presos, é mais provável que estejamos recriando os mesmos velhos padrões com nossos pensamentos e atitudes atuais. Para mudar nosso carma e mudar nossas vidas, temos que mudar nossas mentes. O professor Zen John Daido Loori disse: 'Causa e efeito são uma coisa. E o que é isso? Você. É por isso que o que você faz e o que acontece com você são a mesma coisa.'Certamente, o carma do passado afeta sua vida presente, mas a mudança é sempre possível." />
            </div>

            <div>
                <Title title="O Bom, o Mau e o Karma" />

                <Description description="Às vezes, fala-se em carma 'bom' e 'ruim'. A visão budista sobre o que é 'bom' e 'mal' difere um pouco do entendimento comum no Ocidente. Na perspectiva budista, é benéfico pensar em termos de 'saudável' e 'prejudicial' em vez de 'bom' e 'mal'. As ações saudáveis nascem da compaixão altruísta, da bondade amorosa e da sabedoria, enquanto as ações prejudiciais são fruto da ganância, do ódio e da ignorância. Alguns mestres preferem usar termos como 'útil e inútil' para expressar essa noção." />
            </div>
        </section>

    <section className="pb-8">
        <Title title="Videos relacionados ao Karma" />

        <ul className="grid gap-4 pt-4">
        {
            videosToKarma.map(({name, path}, i) => {
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

export default Karma