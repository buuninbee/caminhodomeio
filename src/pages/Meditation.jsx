import Nav from "@/components/Nav"
import meditationBg from "../assets/meditation.png"
import Title from "@/components/Title"
import Description from "@/components/Description"
import howDoMeditation from "../assets/whatsIsMeditation.png"


import {motion} from "motion/react"
import Footer from "@/components/Footer"

const Meditation = () => {
  return (
    <>
      <Nav/>

      <div className='grid mt-16 lg:mt-24'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
            }} className="absolute z-10 grid self-end  px-4">
            <Title title="Meditação" />
        </motion.div>
        <img className="object-cover z-0 w-full lg:h-[700px] lg:object-fill" src={meditationBg} alt="MOnge meditanto em uma floresta na chuva" />
      </div>

      <main className="px-4">
        <div className="pb-6">
          <Description description="Há uma diversidade de tipos de meditação budista, abrangendo múltiplas abordagens, métodos e técnicas, cada um com suas próprias finalidades. Algumas escolas enfatizam um método específico, enquanto outras incorporam uma variedade de métodos" />
        </div>

        <section className="pb-8">
          <Title title="Pra quê meditar?" />

          <div className="grid gap-4">
            <Description description="Os benefícios da meditação variam conforme a prática individual e não representam uma solução instantânea para todos os problemas. Em geral, qualquer pessoa pode meditar, mas para aquelas com certas condições mentais ou traumas, pode ser prejudicial sem orientação adequada. Nestes casos, é recomendável buscar um profissional de saúde mental e seguir suas diretrizes, podendo a meditação ser aprovada e útil como parte do tratamento terapêutico, ou não. Para a maioria, uma prática consistente de meditação pode oferecer muitos benefícios, alguns dos quais são cientificamente comprovados. Contudo, é importante notar que a meditação é praticada há milênios e seus benefícios são reconhecidos pelos budistas sem necessidade de validação científica." />

            <Description description="É importante mencionar que certos benefícios da meditação surgem como 'efeitos secundários', não sendo o objetivo principal. No budismo, o objetivo é alcançar a iluminação. A meditação é um dos elementos do Nobre Caminho Óctuplo e deve ser praticada em conjunto com os demais ensinamentos. A prática isolada da meditação é insuficiente. No entanto, mesmo quem não é budista, ou um budista que busca apenas tranquilidade e não a iluminação, pode se beneficiar da prática meditativa, embora a proposta de Buda fosse mais ambiciosa do que apenas o bem-estar." />

            <Description description="Manter uma prática regular de meditação geralmente requer esforço e motivação firme, especialmente no início. Os benefícios podem motivar, mas não aparecem imediatamente, levando muitos a desistirem de manter uma prática constante. O apoio de uma comunidade e uma base budista podem fortalecer a motivação, independentemente dos benefícios." />
          </div>
        </section>

        <section className="pb-8">
          <Title title="Quanto tempo meditar?" />

          <div>
            <Description description="Dez minutos por dia é um excelente ponto de partida. Após consolidar esse hábito, pode-se aumentar a duração ou a frequência. Contudo, manter dez minutos diários já é um avanço significativo. Se por acaso não conseguir praticar em algum dia, não se culpe; a formação de hábitos demanda tempo, então seja gentil consigo mesmo. O crucial é a regularidade: é mais benéfico meditar dez minutos todos os dias ou três a cinco vezes por semana do que uma hora esporadicamente. Vale ressaltar, mais uma vez, a importância de um mentor para auxiliar no seu percurso." />
          </div>
        </section>

        <section className="pb-8">
          <Title title="Como meditar?" />

          <div>
            <Description description="O início do dia, após acordar, é um dos melhores momentos para meditar, já que o corpo está descansado e alerta, e a mente, mais tranquila, pois ainda não foi perturbada pelos eventos do dia. Meditar antes de dormir também é benéfico, mas o cansaço pode tornar mais difícil evitar adormecer. Se possível, faça uma sessão pela manhã." />

            <div className="grid py-4">
              <img className="w-full justify-self-center sm:w-8/12" src={howDoMeditation} alt="uma série de poses de como meditar" />
            </div>

            <div>
              <ul className="grid gap-3 list-disc marker:text-segundary px-4 text-primary sm:text-lg">
                <li>
                  Adote uma das posições ilustradas anteriormente, priorizando manter a coluna reta. Nas posturas tradicionais, sente-se em um zafu ou almofada, com as pernas cruzadas, de modo que o cóccix fique mais alto que os joelhos e estes toquem o chão, contribuindo para uma coluna alinhada e uma postura firme. Caso não possua uma almofada de meditação, uma almofada comum pode ser utilizada, dobrando-a se necessário, ou mesmo uma manta dobrada ou enrolada. É possível também praticar sem o uso de qualquer almofada.
                </li>
                <li>
                  <p>Nota: A meditação pode ser praticada em diferentes posturas: em pé, caminhando ou deitado. Estas três, juntamente com a postura sentada, foram mencionadas por Buda. A atitude meditativa deve ser incorporada em todas as atividades cotidianas. Este artigo enfatiza a meditação sentada por ser o treinamento mais eficiente para desenvolver uma mente que possa ser mantida em qualquer circunstância.</p>
                </li>
                <li>
                  <p>Os olhos ficam semiabertos ou fechados.</p>
                </li>
                <li>
                  <p>A boca fica fechada, a língua atrás dos dentes e a tocar no céu da boca.</p>
                </li>
                <li>
                  <p>As mãos podem repousar no colo formando o mudra cósmico ou simplesmente colocadas uma sobre a outra com as palmas para cima. Na posição meio-lótus, onde o pé direito repousa sobre a coxa esquerda, a mão esquerda deve ficar sob a direita. É possível alternar a posição das pernas e mãos entre sessões para evitar fadiga de um lado e manter a flexibilidade de ambos. Há quem prefira também apoiar as mãos perto dos joelhos com as palmas voltadas para baixo.</p>
                </li>
                <li>
                  <p>Coluna e pescoço devem ficar direitos, alinhados, mas de forma relaxada, sem tenção.</p>
                </li>
                <li>
                Mantenha o corpo imóvel (faça o melhor que conseguir, tenha atenção aos limites do seu corpo para não o ferir). Um corpo imóvel ajuda a estabilizar a mente.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-8">
          <Title title="Que horas eu devo meditar?" />

          <div className="grid gap-4">
            <Description description="O início do dia, após acordar, é um dos melhores momentos para meditar, já que o corpo está descansado e alerta, e a mente, mais tranquila, pois ainda não foi perturbada pelos eventos do dia. Meditar antes de dormir também é benéfico, mas o cansaço pode tornar mais difícil evitar adormecer. Se possível, faça uma sessão pela manhã e outra à noite; se não, escolha o momento mais conveniente para uma única sessão. A meditação pode ser praticada a qualquer hora do dia." />

            <Description description="É recomendável realizar pequenas meditações ao longo do dia, como um minuto de respiração consciente em diferentes momentos. Esperar em uma fila, por exemplo, é uma boa oportunidade para se reconectar com o presente. Atividades como comer ou lavar louça com plena atenção também são práticas válidas. A meditação deve ser um exercício mental constante na rotina diária. A prática regular da meditação é essencial. Meditar esporadicamente, como uma vez ao mês ou alguns dias no ano, é ineficaz. Regularidade não implica em meditar diariamente, mas para que seja efetivo, é crucial manter uma frequência e constância na prática." />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Meditation