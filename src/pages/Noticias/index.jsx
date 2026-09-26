import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Style from './noticias.module.css'
import Swal from 'sweetalert2'


export const Noticias = () => {

    const [noticias, setNoticias] = useState([])

    const apiKey = import.meta.env.VITE_API_KEY
    const url = import.meta.env.VITE_URL

    useEffect(() => {
        const fetchApi = async () => {

            Swal.fire({
                title: 'Carregando notícias',
                icon: 'info',
                showConfirmButton: false,
                allowOutsideClick: false
            })

            try {
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'x-api-key': apiKey
                    }

                })
                const data = await res.json()
  
                setNoticias(data.news)

                Swal.close()

            } catch (err) {
                console.error(err.message)
            }
        }
        fetchApi()
    }, [])


    return (
        <div className={Style.container}>
            <h2>Notícias 24 Horas</h2>
            <div className={Style.newsContainer}>
            {
                noticias.map(noticia=>(
                    <div className={Style.news} key={noticia.id}>
                        <h3>{noticia.title}</h3>
                        <img src={noticia.image} alt={noticia.title} />
                        <p>{noticia.summary}</p>
                        <Link to={`/noticia/${noticia.id}`}>Acessar</Link>
                    </div>
                )

                )
            }
            </div>
        </div >
    )
}