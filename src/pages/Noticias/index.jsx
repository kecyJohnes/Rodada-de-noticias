import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Style from './noticias.module.css'


export const Noticias = () => {

    const [noticias, setNoticias]=useState([])

    const apiKey = 'fc5cab5ccbc34b2e811b65e8870c16e5'
    const url = 'https://api.worldnewsapi.com/search-news?language=pt&source-country=br'

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'x-api-key': apiKey
                    }

                })
                const data = await res.json()
                console.log(data.news)
                setNoticias(data.news)

            } catch (err) {
                console.error(err.message)
            }
        }
        fetchApi()
    },[])


    return (
        <div className={Style.container}>
            <h2>Notícias 24 Horas</h2>
            {/* <div>
                {noticias.news.map((noticia)=>{
                    return(
                        <div key={noticia.id}>
                            <p>{noticia.author}</p>
                        </div>
                    )
                })}
            </div> */
            noticias.map(noticia=>(
                <div key={noticia.id}>
                    <h3>{noticia.title}</h3>
                    </div>
            ))}
        </div>
    )
}