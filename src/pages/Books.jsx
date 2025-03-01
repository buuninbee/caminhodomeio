import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useState } from "react";
// import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAH7acwDSL8vdge-EPA883WrT0xGuvql7g",
  authDomain: "caminhodomeio.firebaseapp.com",
  projectId: "caminhodomeio"
});

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const Books = () => {
  const [books,setBooks] = useState([])

  const db = getFirestore(firebaseConfig)
  const booksCollectionRef = collection(db, "livros")

//   useEffect(() => {
//     const getBooks = async () => {
//         const data = await getDocs(booksCollectionRef,  { source: "cache" })
//         const booksList = data.docs.map(doc => doc.data());
        
//         setBooks(booksList)
//     }
//     getBooks()
//   }, [])

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
    <div className="py-14 px-3 text-primary">
        <ul>
            {books.map((book)=>{
                return(
                    <li key={book.titulo}>
                        <h2>{book.título}</h2>
                        <a href={book.link} target="_blank" rel="noopener noreferrer">baixar</a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Books