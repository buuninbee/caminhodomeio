import threeJewelsBg from "../assets/threeJewels.png"
import Title from "@/components/Title"
import Description from "@/components/Description"
import LinkToVideos from "@/components/LinkToVideos"


import {motion} from "motion/react"
import Badge from "@/components/Badge"
import Line from "@/components/Line"
import threejewels from "@/utils/threejewels"

const videosToThreeJewels = [
    {
      name: 'Monja Heishin Sensei - As 3 joias do budismo', 
      path: 'https://youtu.be/cSDRMxcSy9w?si=aAQXY_4GtK5J2JY2'
    },
    {
      name: 'As Três Jóias', 
      path: 'https://youtu.be/wDfxuO84DWs?si=A8f3b4FKZT1_y6uf'
    },
    {
      name: 'Réfugio nas três joias', 
      path: 'https://youtu.be/XEUTfLxNgqI?si=4dwzq8xtnPq-180Z'
    }
]

const ThreeJewels = () => {
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
                <Title title="As três joias" />
            </motion.div>
            <img className="object-cover z-0 w-full lg:h-[700px] lg:object-fill" src={threeJewelsBg} alt="Um grupo de quatro monges crianças andando em um templo" />
        </div>

        <main className="px-4 grid sm:px-9 lg:px-16">
            <section className="grid gap-7 justify-center">
                <div>
                    <Description description="As Três Joias fazem parte da tradição budista, sendo o conjunto dos ensinamentos do Buda, em que Buda representa o Desperto, o Dharma representa os ensinamentos e a Sangha representa a Comunidade dos Discípulos/seguidores. Os budistas se inspiram nessas Três Joias para obter a força e a vontade necessárias para transformar o que é possível, a coragem e a paz para aceitar o imutável e a sabedoria para diferenciar um do outro. A “entrada formal” para o budismo acontece na cerimónia do refúgio nas 3 Jóias. A cerimónia do refugio é uma marco na medida em que o praticante se compromete a seguir o caminho budista, a se dedicar ao Dharma." />
                </div>

                <div className="flex justify-center gap-3 pb-8"> 
                    <Line />

                    <div className="grid gap-5 py-4 w-auto items-center relative">
                        {threejewels.map(({path}, i) => {
                        return(
                            <Badge key={i} number={i + 1} path={path} />
                        )
                        })}
                    </div>
                </div>
            </section>

            <section className="grid *:pb-8 *:grid">
                <div>
                    <Title title="Buda" />

                    <Description description="Quando alguém busca refúgio no Buda, deve lembrar-se das qualidades de um Buda e esforçar-se para desenvolver essas mesmas qualidades. A qualidade essencial de um Buda é a iluminação; assim, o refúgio é realmente tomado na iluminação que se desenvolve internamente. Respeitamos qualquer ser que tenha alcançado a iluminação total; isto é, valorizamos a qualidade onde quer que ela se manifeste, sem restringi-la a uma seita ou entidade específica. Honramos o Buda não através de rituais ou cerimônias, mas praticando seus ensinamentos e seguindo o caminho do Dhamma desde o início. Tomar refúgio no Buda significa reconhecer a semente da iluminação dentro de nós, abrindo caminho para a libertação e incorporando qualidades como coragem, amor e compaixão." />
                </div>

                <div>
                    <Title title="Dharma" />

                    <div className="grid gap-4">
                        <Description description="O Dharma nos revela a realidade das doenças, morte, ignorância, raiva e egoísmo, que são fontes de sofrimento, mas também mostra que é possível superá-las. Ele ilumina nossa vida, afastando a escuridão da ignorância, nos fazendo conscientes do nosso egoísmo e limitações, e nos guiando para a iluminação. Buscar refúgio no Dharma vai além do sectarismo; não se trata de trocar uma religião organizada por outra. É, na verdade, buscar abrigo na ética, no domínio da mente e na sabedoria. Um ensinamento para ser considerado Dharma deve ter qualidades específicas. Deve ser claro e compreensível para todos." />

                        <Description description="Deve ser verificado na prática, com os próprios olhos, como uma realidade vivida, não apenas imaginada. A verdade do nibbāna só deve ser aceita após ser vivenciada. O Dharma deve trazer benefícios imediatos, não somente promessas para o futuro. Ele tem a característica de 'venha e veja'; veja por si mesmo, experimente pessoalmente, sem aceitar nada cegamente. Ao experimentar o Dharma e perceber seus benefícios, naturalmente você vai querer incentivar e ajudar outros a fazer o mesmo. Cada passo no caminho nos leva mais perto do objetivo final: nenhum esforço é em vão" />

                        <Description description=" O Dharma é benéfico no começo, no meio e no fim. Por último, qualquer pessoa, independentemente do seu grau de conhecimento, pode praticá-lo e usufruir dos seus benefícios. Entendendo o Dharma dessa forma, quem se refugia nele e inicia sua prática encontra um verdadeiro propósito na sua devoção." />
                    </div>
                </div>

                <div>
                    <Title title="Sangha" />

                    <Description description="Tomar refúgio na Sangha não significa aderir a uma seita, mas sim integrar-se à comunidade dos seguidores do Buda. Essa comunidade vive integrada à sociedade, promovendo harmonia e respeito por todas as formas de vida, dedicando-se a escutar o Dharma e a compartilhar sua fé. Na Sangha, compartilhamos tanto as alegrias quanto as adversidades, oferecendo e recebendo apoio mútuo no caminho para a iluminação e liberdade. A Sangha é uma verdadeira fraternidade de indivíduos que seguem o caminho da sabedoria e compaixão, conforme ensinado pelo Buda. Ao buscar refúgio na Sangha, unimo-nos ao fluxo da vida, tornando-nos um com todos os praticantes irmãos e irmãs." />
                </div>
            </section>

        <section className="pb-8">
          <Title title="Videos relacionados sobre as três joias" />

          <ul className="grid gap-4 pt-4">
            {
              videosToThreeJewels.map(({name, path}, i) => {
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

export default ThreeJewels