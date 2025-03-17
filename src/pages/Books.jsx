import Tag from "@/components/Tag";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useState, useEffect } from "react";

import {motion} from "motion/react"
import booksBg from "../assets/books.png"
import Description from "@/components/Description";
import Title from "@/components/Title";


const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAH7acwDSL8vdge-EPA883WrT0xGuvql7g",
  authDomain: "caminhodomeio.firebaseapp.com",
  projectId: "caminhodomeio"
});

const Books = () => {
  const [books,setBooks] = useState([])

  const db = getFirestore(firebaseConfig)
  const booksCollectionRef = collection(db, "livros")

  useEffect(() => {
    const getBooks = async () => {
        try {
            // Primeiro, tenta carregar os dados do cache
            const data = await getDocs(booksCollectionRef, { source: "cache" });
            if (!data.empty) {
                setBooks(data.docs.map(doc => doc.data()));
            }

            // Se o cache não tiver dados, busca do servidor
            const freshData = await getDocs(booksCollectionRef, { source: "server" });
            setBooks(freshData.docs.map(doc => doc.data()));
        } catch (error) {
            console.error("Erro ao buscar livros:", error);
        }
    };

    getBooks();
}, []);

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
            <Title title="Livros Budistas" />
        </motion.div>
        <img className="object-cover z-0 w-full lg:h-[700px] lg:object-fill" src={booksBg} alt="Foto de uma biblioteca cheio de livros" />
      </div>

      <main className="px-4 grid sm:px-9 lg:px-16">
      <section className="grid gap-7 pb-8 justify-center">
            <div className="grid gap-3">
                <Description description="Esses livros são apenas sugestões, não são obrigatórios. Eles servem como uma base para você se aprofundar no Budismo e entender melhor seus ensinamentos. Use-os como ponto de partida para explorar o que faz sentido para você nessa jornada." />
                
                <p className="text-segundary italic lg:text-lg">A tag acima do nome do livro serve para indicar a tradição ou escola budista à qual o autor pertence, oferecendo mais contexto sobre os ensinamentos apresentados na obra.</p>
            </div>
        </section>

        <section>
        <div className=" text-primary">
            <ul>
                {books.map((book)=>{
                    return(
                        <li key={book.título} className="text-primary mb-12 lg:mb-16">
                            <Tag tradition={book.tradição} >{book.tradição}</Tag>
                            <h2 className="text-2xl pt-3 md:text-3xl md:pb-2">{book.título}</h2>
                            <div className="grid gap-1 mb-2 text-lg md:text-2xl">
                                <h3>{`Autor: ${book.autor}`}</h3>
                                <h3>{`Ano: ${book.ano}`}</h3>
                            </div>
                            <p className="text-xl mb-4 lg:text-2xl">{book.descrição}</p>
                            <a className="text-base font-sans justify-self-center rounded-md py-2 px-5 sm:px-8 sm:py-3 sm:text-xl bg-segundary text-onPrimary hover:bg-amber-400" href={book.link} target="_blank" rel="noopener noreferrer">baixar</a>
                        </li>
                    )
                })}
            </ul>
        </div>
        </section>
      </main>
   
    </>
  )
}

export default Books