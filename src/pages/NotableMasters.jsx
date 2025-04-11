import Title from "@/components/Title"
import { useState, useEffect } from "react"
import { db, collection, getDocs} from "../utils/firebaseConfig"
import notableMatersBg from "../assets/notableMasters.png"

import {motion} from "motion/react"
import Description from "@/components/Description"
import Tag from "@/components/Tag"
import Seo from "@/components/Seo"


const NotableMasters = () => {
  const [masters, setMasters] = useState([])

  const mastersCollectionRef = collection(db, "mestres")

  useEffect(() => {
    const getMasters = async () => {
        try {
            // Primeiro, tenta carregar os dados do cache
            const data = await getDocs(mastersCollectionRef, { source: "cache" });
            if (!data.empty) {
                setMasters(data.docs.map(doc => doc.data()));
            }

            // Se o cache não tiver dados, busca do servidor
            const freshData = await getDocs(mastersCollectionRef, { source: "server" });
            setMasters(freshData.docs.map(doc => doc.data()));
        } catch (error) {
            console.error("Erro ao buscar mestres:", error);
        }
    };

    getMasters();
}, []);

  return (
    <>
    <Seo title="Mestres Notaveis - Caminho do meio" description="o longo dos séculos, grandes mestres do budismo ajudaram a preservar e transmitir os ensinamentos do Buda, adaptando-os às necessidades de cada época e cultura. Nesta página, você encontrará a história e os ensinamentos de mestres notáveis de diversas tradições budistas, como Theravāda, Mahāyāna e Vajrayāna. Cada um desses mestres, com sua sabedoria e compaixão, deixou um legado profundo, inspirando gerações de praticantes na busca pelo despertar." img={notableMatersBg} />
      <div className='grid mt-16 lg:mt-24'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
            }} className="absolute z-10 grid self-end px-4 sm:px-9 lg:px-16">
            <Title title="Mestres Notaveis" />
        </motion.div>
        <img className="object-cover z-0 w-full lg:h-[700px] lg:object-fill" src={notableMatersBg} alt="Dois monges caminhando, um na frente e o outro atrás" />
      </div>

      <main className="px-4 sm:px-9 lg:px-16">
      <div className="pb-6">
          <Description description="Ao longo dos séculos, grandes mestres do budismo ajudaram a preservar e transmitir os ensinamentos do Buda, adaptando-os às necessidades de cada época e cultura. Nesta página, você encontrará a história e os ensinamentos de mestres notáveis de diversas tradições budistas, como Theravāda, Mahāyāna e Vajrayāna. Cada um desses mestres, com sua sabedoria e compaixão, deixou um legado profundo, inspirando gerações de praticantes na busca pelo despertar." />
        </div>

        <section className="mb-8">
          <div className="grid" >
              <ul className="grid gap-10">
              {
                masters.map( (master, i) => {
                  return(
                  <li key={i} className="grid gap-3 lg:grid-cols-2 lg:gap-8">
                    <div className="w-full mb-3 lg:">
                      <img alt="" src={master.imagem} className="bg-center rounded-sm bg-cover inset-0 h-full w-full object-cover"/>
                    </div>

                    <div className="grid gap-5">
                      <div className="grid items-end">
                        <Tag tradition={master.tradição}>{master.tradição}</Tag>
                      </div>

                      <div className="grid">
                        <Title title={master.nome} />
                        <Description description={master.descrição} />
                      </div>
                    </div>
                </li>
                  )
                })
              }
              </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default NotableMasters