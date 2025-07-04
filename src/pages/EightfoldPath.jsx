import Title from "@/components/Title"
import Description from "@/components/Description"
import Line from "@/components/Line"
import Badge from "@/components/Badge"

import eightfoldPath from "@/utils/eightfoldPath"

import eightfoldpathBg from "../assets/eightfoldPath.png"

import {motion} from "motion/react"
import LinkToVideos from "@/components/LinkToVideos"
import Seo from "@/components/Seo"


const videosToEightfoldPath = [
  {
    name: 'Você é uma teia vibrante em constante transformação', 
    path: 'https://youtu.be/EoYoRkFJIuk?si=_gaXirfKsDWXqEb6'
  },
  {
    name: 'O Caminho Óctuplo De Buda', 
    path: 'https://youtu.be/uPMUYwy7Csc?si=2AYcNiw2IOT-JjE0'
  },
  {
    name: 'O CAMINHO ÓCTUPLO DE BUDA', 
    path: 'https://youtu.be/QbA8aTTP4cQ?si=FoDxnnTgUXrbWSCK'
  },
]

const EightfoldPath = () => {
  return (
    <>  
    <Seo title="O Nobre Caminho Óctuplo - Caminho do meio" description="É extre­ma­men­te impor­tan­te ter a Compreensão Correta, por­que dela flui dire­ta­men­te tudo o mais no budis­mo. No come­ço, não pode­mos espe­rar que nossa compreensão este­ja em per­fei­ta harmonia com o Darma. Se fosse assim, já não tería­mos nada a apren­der. Daí que um aspec­to fun­da­men­tal da Compreensão Correta é a von­ta­de de empreen­der um autoquestionamento, sobre­tu­do no que diz respeito ao nosso com­por­ta­men­to." img={eightfoldpathBg} />

      <div className='grid mt-16 lg:mt-24'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
            }} className="absolute z-10 grid self-end px-4 sm:px-9 lg:px-16">
            <Title title="O Nobre Caminho Óctuplo" />
        </motion.div>
        <img className="object-cover z-0 w-full lg:h-[700px] lg:object-fill" src={eightfoldpathBg} alt="Um grupo de monges caminhando" />
      </div>

      <main className="px-4 grid sm:px-9 lg:px-16">
        <section className="grid gap-7 justify-center">
          <div>
            <Description description="A insa­tis­fa­ção ine­ren­te à vida é a pri­mei­ra Nobre Verdade do budis­mo. A forma de aca­bar com o sofri­men­to é a quar­ta Nobre Verdade. Foi para aju­dar os seres sen­cien­tes a acabar com o seu sofri­men­to que o Buda Shakyamuni ensi­nou o Nobre Caminho Óctu­plo. Ele cons­ti­tui a versão detalhada da quar­ta Nobre Verdade e é fun­da­men­tal à práti­ca budis­ta. Diz-se “óctu­plo” por­que é for­ma­do por oito ele­men­tos ou face­tas; “nobre”, por ser moral­men­te cor­re­to e por­que nada nele nos desen­ca­mi­nha­ria; “cami­nho” porque deve ser segui­do duran­te um perío­do, da mesma forma que uma tri­lha, e por­que leva dire­ta­men­te à meta da liber­ta­ção do sofri­men­to e da ilu­são." />
          </div>

          <div className="flex justify-center gap-3 pb-8"> 
              <Line />

              <div className="grid gap-5 py-4 w-auto items-center relative">
                {eightfoldPath.map(({path}, i) => {
                  return(
                    <Badge key={i} number={i + 1} path={path} />
                  )
                })}
              </div>
          </div>
        </section>

        <section className="grid *:pb-8">
          <div>
            <Title title="Compreensão Correta" />

            <div className="grid gap-4">
              <Description description="É extre­ma­men­te impor­tan­te ter a Compreensão Correta, por­que dela flui dire­ta­men­te tudo o mais no budis­mo. No come­ço, não pode­mos espe­rar que nossa compreensão este­ja em per­fei­ta harmonia com o Darma. Se fosse assim, já não tería­mos nada a apren­der. Daí que um aspec­to fun­da­men­tal da Compreensão Correta é a von­ta­de de empreen­der um autoquestionamento, sobre­tu­do no que diz respeito ao nosso com­por­ta­men­to. A maio­ria das
              pes­soas gasta um tempo enor­me ten­tan­do jus­ti­fi­car o que fez ou quer fazer. Como budistas, deve­mos come­çar a rever­ter tal pro­ces­so e, em vez de jus­ti­fi­car nossas trans­gres­sões, ten­tar des­co­brir o que elas são e apren­der como transfor­má-las." />

              <Description description="O Sutra Shrimala-devi-simhanada (Sutra Rugir de Leão da Rainha Shrimala) diz que Compreensão Correta é aque­la que não leva à nossa ruína. De acor­do com o Sutra Avatamsaka (Sutra da Guirlanda de Flores), Compreensão Correta é a que nos tira da ilu­são. Para o Tra­ta­do sobre a Perfeição da Grande Sabedoria, Compreensão Correta é a pró­pria
              sa­be­do­ria. O Portais Gradativos para o Mundo do Darma ensi­na que Compreensão Correta é a clara e per­fei­ta per­cep­ção das Quatro Nobres Verdades." />

              <Description description="A pala­vra “compreensão” deno­ta, aqui, nossa forma de ver e enten­der a vida, o que estabe­le­ce nossa filo­so­fia de vida" />
            </div>
          </div>

          <div>
            <Title title="Pensamento Correto" />

            <div className="grid gap-4">
              <Description description="Obviamente, o Pensamento Correto fun­da­men­ta-se na Compreensão Correta. Se nossa compreensão da vida neste mundo esti­ver cor­re­ta, os pensa­men­tos dela decor­ren­tes tam­bém o serão. Sem dúvida, na prá­ti­ca do pensamento correto, deve exis­tir uma interação cons­tan­te entre a intenção (pensamento) e a com­preen­são. Não basta que­rer ter Compreensão Correta ou Pensamento Correto. Até o pró­prio Buda pre­ci­sou de seis anos de inten­sa prá­ti­ca ascé­ti­ca para che­gar ao pleno enten­di­men­to da ver­da­de. O ali­cer­ce essen­cial para o Pensamento Correto, assim como para a Compreensão Correta, é a von­ta­de de ques­tio­nar a nós pró­prios e às nos­sas cren­ças. Ninguém con­se­gui­rá conquis­tar Compreensão Correta nem Pensamento Correto sem pas­sar lon­gos perío­dos em intensa e fran­ca introspec­ção. O Shastra Yogachara-bhumi (Tratado sobre os Estágios da Prática da Ioga) diz: “Quando se inves­te ener­gia na Compreensão Correta, alcan­ça-se um esta­do livre do mal e da raiva, que é o Pensamento Correto”." />

              <Description description="Pensamento Correto é aque­le desas­so­cia­do dos Três Venenos – cobi­ça, raiva e ignorância. Pode ser visto como a fer­ra­men­ta que nos ajuda a apli­car a Compreensão Correta à nossa vida. Podemos ler a res­pei­to da Compreensão Correta e até enten­dero que lemos; entretanto, saber o que é Compreensão Correta não tem gran­de uti­li­da­de. É o Pensamento Correto que nos ajuda a apli­car essa compreensão à nossa vida." />
            </div>
          </div>

          <div>
            <Title title="Fala correta" />

            <div className="grid gap-4">
                <Description description="A Fala Correta evita que crie­mos carma negativo pela palavra. A maio­ria das pessoas cria gran­de parte de seu carma nega­ti­vo por meio de pala­vras des­tem­pe­ra­das. Não deve­mos ter medo de falar a ver­da­de, mas a forma como dize­mos as coi­sas e o momen­to que escolhe­mos para isso são muito importantes. Uma ver­da­de dita na hora erra­da – corri­gir alguém na fren­te de outras pes­soas, por exem­plo – pode cau­sar imenso sofrimen­to. Se mesmo uma ver­da­de pode cau­sar danos, ima­gi­ne o tama­nho dos pre­juí­zos que são gerados com men­ti­ras, aspe­re­za e mexe­ri­cos!" />

                <Description description="Em sua defi­ni­ção mais ele­men­tar, Fala Correta equi­va­le a não men­tir, não ter duas caras (não ser fin­gi­do), não ser rude e não ser sar­cás­ti­co (não caçoar). Além des­sas características, Fala Correta é tam­bém aque­la que não é irri­tan­te, difa­ma­tó­ria, orgu­lho­sa ou arro­gan­te, insul­tuo­sa ou crí­ti­ca, amar­ga ou cáus­ti­ca, injus­ti­fi­ca­da­men­te extra­va­gan­te ou pom­po­sa. Seria bom que todos os budis­tas estu­das­sem essa lista com muita aten­ção." />

                <Description description="Cabe repe­tir: gran­de parte do carma nega­ti­vo é cria­da por meio da fala. Examine sua vida e veja se isso não é ver­da­de. Há qua­tro dire­tri­zes que pode­mos e deve­mos ­seguir no que diz res­pei­to à fala:" />
                

                <ul className="grid gap-3 list-disc marker:text-segundary px-4 text-primary sm:text-lg">
                  <li>Só falar a ver­da­de;</li>
                  <li>Ser com­pas­si­vo ao falar. Se acre­di­tar que suas pala­vras pode­rão ferir os sentimentos de alguém, cale-se sim­ples­  men­te. Use a voz para trazer gen­ti­le­za e bon­da­de ao mundo;</li>
                  <li>Ser enco­ra­ja­dor. Às vezes, uma sim­ples pala­vra pode tra­zer paz e alegria a alguém. Caso tenha a opor­tu­ni­da­de de ani­mar ­alguém, não se con­te­nha – suas pala­vras tal­vez sejam jus­ta­men­te o que ele está pre­ci­san­do ouvir;</li>
                  <li>Ser pres­ta­ti­vo. Utilize as pala­vras para aju­dar o pró­xi­mo. As pala­vras podem ser úteis de ­várias for­mas – para expli­car e ensi­nar, para incenti­var os ­outros a con­ver­sar conos­co sobre algum assun­to. Este últi­mo ponto é bas­tan­te importante, uma vez que a melhor forma de apren­der o Darma é por meio do diálogo e da argumentação.</li>
                </ul>
            </div>
          </div>

          <div>
            <Title title="Ação Correta" />

            <Description description="Pensamento Correto diz res­pei­to ao fun­cio­na­men­to da mente. Fala Correta refere-se à utili­za­ção da lin­gua­gem. Ação Correta abran­ge tudo o que faze­mos com o corpo, incluindo bons hábi­tos de ali­men­ta­ção e sono, exer­cí­cio e repou­so ade­qua­dos, hábi­tos de tra­ba­lho e tudo o mais que se rela­cio­na ao corpo e ao carma gera­do pelo seu comportamen­to.
Ação Correta é ­seguir os Cinco Preceitos do budis­mo. Implica uti­li­zar o corpo para executar e expres­sar as con­clu­sões cor­re­tas tira­das por meio do Pensamento Correto e da Compreensão Correta." />
          </div>

          <div>
            <Title title="Meio de Vida Correto" />

            <div className="grid gap-4">
              <Description description="Meio de Vida Correto, ou Profissão Correta, diz res­pei­to à forma como ganha­mos a vida. Isso pode ser problemático em meio às com­ple­xi­da­des do mundo moder­no. Meio de Vida Correto impli­ca não fazer e não levar nin­guém a fazer nada que viole os pre­cei­tos do budis­mo. De acor­do com o Shastra Yogachara-bhumi (Tratado sobre os Estágios da Prática da Ioga): “Meio de Vida Correto sig­ni­fi­ca que, para aten­der às necessi­da­des de vestuário, alimenta­ção e ­outros itens, não se fará nada que viole a mora­li­da­de”." />
              <Description description="Todo tra­ba­lho deve estar na maior sin­to­nia pos­sí­vel com os ensinamentos do Buda. Nossa ocu­pa­ção não deve pre­ju­di­car nin­guém, nem tam­pou­co incen­ti­var que outra pes­soa o faça. O Buda Shakyamuni viveu em uma socie­da­de muito dife­ren­te da nossa. A des­pei­to disso, ele rela­cio­nou duas espe­ci­fi­ci­da­des rela­ti­vas ao tra­ba­lho que ainda são váli­das para os budis­tas de hoje:" />
              <ul className="grid gap-3 list-disc marker:text-segundary px-4 text-primary sm:text-lg">
                <li>Não ter casas de jogos, bares, bor­déis ou mata­dou­ros.</li>
                <li>Não caçar, pes­car ou exer­cer pro­fis­são que envol­va matan­ça de animais.</li>
              </ul>
              <Description description="O tra­ba­lho que faze­mos neste mundo ­produz mui­tas sementes cármicas. O budis­mo é conheci­do como Caminho do Meio por­que o Buda sem­pre ensinou seus segui­do­res a evitar extremos em tudo – equi­lí­brio e dis­cer­ni­men­to são aspec­tos fun­da­men­tais da sabe­do­ria. Assim, ao ana­li­sar nossa ocu­pa­ção e com­pa­rar o que faze­mos com as ver­da­des do Darma, é pre­ci­so nos cer­ti­fi­car de que não esta­mos sendo radi­cais em nos­sas interpreta­ções." />
              <Description description="Porém, se com esta análise con­cluir­mos que nossa ati­vi­da­de con­tra­ria os ensi­na­men­tos do Buda, será neces­sá­rio mudar a forma como tra­ba­lha­mos ou até mudar de ocu­pa­ção. Esse tipo de mudan­ça não deve ser empreen­di­do pre­ci­pi­ta­da­men­te. Devem-se levar em consideração os membros de nossa família, patrões, empregados e todas as pes­soas que pos­sam ser afe­ta­das por nos­sas deci­sões." />
            </div>
          </div>

          <div>
            <Title title="Esforço Correto" />

            <div className="grid gap-4">
              <Description description="Depois de ter colo­ca­do a vida em ordem, ou seja, quan­do tiver­mos Compreensão Correta, Pensamento Correto, Fala Correta e Meio de Vida Correto, natu­ral­men­te pas­sa­re­mos a fazer o Esforço Correto." />
              <Description description="Esforço supõe mudar para ­melhor, tor­nar-se mais sábio, calmo e moralmen­te corre­to. Com Esforço Correto, enten­de­mos ­melhor o Darma a cada dia que passa e aprende­mos a apli­cá-lo mais e mais em nossa vida." />
              <Description description="Na prá­ti­ca do budis­mo, como em tudo, man­ter a regu­la­ri­da­de é importan­te. Se nos tornarmos pre­gui­ço­sos ou desa­ten­tos, come­ça­re­mos a regre­dir. O Darma con­tém tesou­ros pro­fun­dos, sendo impos­sí­vel son­dar sua dimen­sãoem pouco tempo. Devemosnos engajar nos ensi­na­men­tos do Buda e, de forma regu­lar e gra­dual, apren­der a valo­ri­zar a vas­ti­dão do Darma e a sabe­do­ria do Buda. Nossa sabe­do­ria se ­ampliará enquan­to permanecermos pró­xi­mos do Darma, per­mi­tin­do que este indi­que como deve­mos nos comportar." />
              <Description description="O Tratado sobre a Perfeição da Grande Sabedoria suge­re qua­tro for­mas de esforço correto:" />
              <ul className="grid gap-3 list-disc marker:text-segundary px-4 text-primary sm:text-lg">
                <li>mani­fes­tan­do a bon­da­de onde ela não exis­te;</li>
                <li>fomen­tan­do a bon­da­de onde ela exis­te;</li>
                <li>não mani­fes­tan­do o mal onde este não exis­te;</li>
                <li>extin­guin­do o mal onde este exis­te.</li>
              </ul>
            </div>
          </div>

          <div>
            <Title title="Atenção Correta" />

            <div className="grid gap-4">
              <Description description="A Atenção Correta advém dos seis pri­mei­ros aspec­tos do Nobre Caminho Óctuplo. Ela é uma parte pura nossa, que se expan­de con­ti­nua­men­te à medi­da que praticamos o Darma. O Sutra dos Ensinamentos Legados pelo Buda diz: “Se nossa Atenção Correta for firme, pode­re­mos até pene­trar no perigo­so mundo dos Cinco Desejos sem que ­nenhum mal se abata sobre nós. É como usar uma arma­du­ra numa bata­lha – não há nada a temer”." />

              <Description description="Os budis­tas devem sem­pre privilegiar a Atenção Correta em detri­men­to do raciocí­nio iludi­do. Se a nossa Atenção é correta não sere­mos aba­la­dos pelas fal­sas distin­ções da dua­li­da­de. Não caire­mos na ilu­são das opo­si­ções nós/outros, perda/ganho, vida/morte. A Atenção Correta nos ensi­na a manter a cons­ciên­cia de que as coi­sas são como devem ser e que tudo o que pode­mos fazer é tra­zer um pouco mais de bondade a este mundo." />

              <Description description="O Buda ensi­nou qua­tro con­tem­pla­ções para nos aju­dar a con­quis­tar e man­ter a Atenção Correta – um esta­do em que não há apego a ­nenhum dos inces­san­tes capri­chos da ilu­são." />

              <Description description="Contemplação da impu­re­za. Uma das cau­sas mais fun­da­men­tais do apego das pessoas à ilu­são é o gran­de amor que ­nutrem pelo corpo. Uma quan­ti­da­de enor­me de cobiça e raiva surge do amor ao corpo. O corpo deve ser cui­da­do e não deve ser mal­tra­ta­do; porém, não pode­mos con­des­cen­der com ele. Todos devem se conscien­ti­zar ple­na­men­te de que o corpo vai um dia adoe­cer e morrer. Mesmo sau­dá­vel, o corpo é reple­to de excre­ções, ali­men­to semi­di­ge­ri­do, muco, linfa, san­gue, urina e mui­tas ­outras subs­tân­cias que são, essencialmente, impu­ras. O Buda ensinou a con­tem­plar a impu­re­za do corpo para nos aju­dar a supe­rar o apego a ele. O obje­ti­vo dessa con­tem­pla­ção não é nos cau­sar repul­sa, mas aju­dar a nos liber­tar do apego ao mundo da carne." />

              <Description description="Contemplação do sofri­men­to. Contemple que todas as sen­sa­ções são dolo­ro­sas ou levam à dor. Esta con­tem­pla­ção volta a enfa­ti­zar a Primeira Nobre Verdade. Indepen­den­te­mente do que acon­te­ça conos­co, no fim das contas, nin­guém consegue esca­par do sofri­men­to cau­sa­do pelas ver­da­des da imper­ma­nên­cia, da doen­ça, da sepa­ra­ção dos entes que­ri­dos e da morte. O Buda Shakyamuni exortava seus segui­do­res a enca­rar esta ver­da­de de fren­te, sem dela se afastar. O Darma fun­da­men­ta-se na ine­ren­te insa­tis­fa­ção da vida neste mundo. O Prín­ci­pe Sidarta, que veio a se tor­nar o Buda, dei­xou a casa de seu pai para bus­car a ilumina­ção ­depois de com­preen­der ple­na­men­te a inevi­ta­bi­li­da­de do sofri­men­to neste mundo." />

              <Description description="
            Contemplação da imper­ma­nên­cia. Contemple a imper­ma­nên­cia e a inconstân­cia dos pensa­men­tos. Os pen­sa­men­tos vêm e vão com rapi­dez quase incon­ce­bí­vel e muito menos con­tro­lá­vel. Em um momen­to esta­mos no paraí­so, no seguin­te vemos as por­tas do infer­no abri­rem-se dian­te de nós. Nada disso é per­ma­nen­te. Nada disso se man­tém.
            A mente movi­men­ta-se inces­san­te­men­te pelas con­di­ções desorganizadas do mundo sen­so­rial. Contemplando as fra­gi­li­da­des e inconstân­cias de nos­sos pró­prios pensamen­tos, ensi­na­mo-nos que todas as coi­sas são imper­ma­nen­tes e que nada que possa­mos con­ce­ber dura para sempre." />

            <Description description="Contemplação do “não eu”. Contemple a ine­xis­tên­cia de uma natu­re­za individual per­ma­nen­te e imu­tá­vel em tudo e em todos." />
            </div>
          </div>

          <div>
            <Title title="Concentração Correta" />

            <div className="grid gap-4">
              <Description description="A prá­ti­ca budis­ta tem como ali­cer­ces a mora­li­da­de, a medi­ta­ção e a sabe­do­ria. Fala Correta, Ação Correta, Meio de Vida Correto e Esforço Correto obje­ti­vam aju­dar-nos a melhorar mora­lmente. Compreensão Correta, Pensamento Correto e Atenção Corretas por sua vez, pretendem nos tor­nar se não ­sábios, pelo menos um pouco mais sábios." />

              <Description description="Concentração Correta é fer­ra­men­ta para apren­der­mos a medi­tar e nos bene­fi­ciar com a medi­ta­ção. A tran­qui­li­da­de e a paz encon­tra­das na medi­ta­ção são os alicerces da sabe­do­ria budis­ta. Em sâns­cri­to, o termo para concentração é samád­i, que desig­na um esta­do profun­do de con­cen­tra­ção ou um estado profundo de equi­lí­brio medi­ta­ti­vo. A base de qual­quer meditação é a con­cen­tra­ção. Quando apren­de­mos a nos con­cen­trar longa e profundamente nas ver­da­des imu­tá­veis do budis­mo e come­ça­mos a des­co­brir sua plenitude em esta­dos men­tais que exis­tem para além da lin­gua­gem, esta­mos pra­ti­can­do a Concentração Correta." />

              <Description description="A paz e a pure­za que são des­co­ber­tas no samád­i, quan­do cor­re­ta­men­te apli­ca­das à vida, tra­zem enor­mes bene­fí­cios para nós e para as pes­soas com as quais temos con­ta­to. Em ter­mos ­gerais, a medi­ta­ção deve pro­mo­ver ­melhor saúde físi­ca, ensi­nar-nos a tranquilidade, auxi­liar-nos a ver mais cla­ra­men­te – o que sig­ni­fi­ca ilu­mi­nar-se – e, finalmente, mos­trar-nos o esplen­dor de nossa ineren­te natu­re­za búdi­ca. A medi­ta­ção deveria promover um com­por­ta­men­to social sau­dá­vel e pres­ta­ti­vo e não nos tornar depres­si­vos ou antissociais." />
            </div>
          </div>
        </section>

        <section className="pb-8">
          <Title title="Vídeos relacionados ao nobre caminho óctuplo" />

          <ul className="grid gap-4 pt-4">
            {
              videosToEightfoldPath.map(({name, path}, i) => {
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

export default EightfoldPath