import threeMentalPoisonsBg from "../assets/threeMentalPoisons.png"
import Title from "@/components/Title"
import Description from "@/components/Description"
import LinkToVideos from "@/components/LinkToVideos"


import {motion} from "motion/react"
import Line from "@/components/Line"
import Badge from "@/components/Badge"
import threementalpoisons from "@/utils/threementalpoisons"
import Seo from "@/components/Seo"

const videosToThreeMentalPoisons = [
    {
      name: 'Apego, raiva e ignorância ', 
      path: 'https://youtu.be/EX0cNIbTLiA?si=gqPChLq64VgrQFiW'
    },
    {
      name: 'Os três VENENOS MENTAIS', 
      path: 'https://youtu.be/03as-lGQRZI?si=sJPLbBR5wU0j7HZf'
    },
    {
      name: 'Os três venenos mentais', 
      path: 'https://youtu.be/SNxtHSZ2SVs?si=pxH3iioN4zQLO2uE'
    }
]

const ThreeMentalPoisons = () => {
  return (
    <>
      <Seo title="Os três venenos mentais - Caminho do meio" description="Os três Venenos Mentais, conforme ensinado por Buda, são a fundação de nossos pensamentos e ações ilusórias. Buda ensinava que a Ignorância, a Ganância e a Raiva são os três Venenos que acabam por direcionar tudo o que fazemos na vida." img={threeMentalPoisonsBg} />
      <div className='grid mt-12'>
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                  duration: 1,
                  delay: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
              }} className="absolute z-10 grid self-end px-4 sm:px-9 lg:px-16">
              <Title title="Os três venenos mentais" />
          </motion.div>
          <img className="object-cover z-0 w-full lg:h-[700px] lg:object-fill" src={threeMentalPoisonsBg} alt="uma foto com um javali, cobra e galo. Animais que representam os três venenos mentais" />
      </div>

      <main className="px-4 grid sm:px-9 lg:px-16">
      <section className="grid gap-7 justify-center">
        <div>
          <Description description="Os três Venenos Mentais, conforme ensinado por Buda, são a fundação de nossos pensamentos e ações ilusórias. Buda ensinava que a Ignorância, a Ganância e a Raiva são os três Venenos que acabam por direcionar tudo o que fazemos na vida." />
        </div>

        <div className="flex justify-center gap-3 pb-8"> 
            <Line />

            <div className="grid gap-5 py-4 w-auto items-center relative">
              {threementalpoisons.map(({path}, i) => {
                return(
                  <Badge key={i} number={i + 1} path={path} />
                )
              })}
            </div>
        </div>
      </section>

      <section className="grid *:pb-8">
        <div>
          <Title title="Ignorância" />

          <Description description="Ignorância ocorre exatamente quando agimos sem atenção, sem considerar o próximo, sem exercer nossa compaixão pelas pessoas. É agir desprovido de sabedoria, na falta do Dharma, sem boas intenções ou intenção pura. Portanto, ignorância não significa agir estupidamente, mas sim agir sem esses componentes em nossa mente." />
        </div>

        <div>
          <Title title="Ganância" />

          <Description description="A ganância se manifesta no desejo incessante de ter, possuir e obter a qualquer custo. Estamos constantemente desejando algo, e não apenas bens materiais. Desejamos amor, amizades, reconhecimento, aceitação, estar certos, prevalecer em nossas opiniões e superar os outros. Almejamos uma vida equilibrada, mas esse anseio pode nos levar ao sofrimento." />
        </div>

        <div>
          <Title title="Raiva" />

          <Description description="Nós também expressamos sentimentos como ira, arrogância, desprezo, desafeto e inveja. Estas são manifestações de nossa ira e raiva. Quando falamos, julgamos e destacamos somente os aspectos negativos das pessoas, estamos na verdade agindo com raiva." />
        </div>
      </section>

      <section className="pb-8">
        <Title title="Vídeos relacionados aos Três venenos mentais" />

        <ul className="grid gap-4 pt-4">
          {
            videosToThreeMentalPoisons.map(({name, path}, i) => {
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

export default ThreeMentalPoisons