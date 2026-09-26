import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"

export const Noticia = () =>{
    const apiKey = import.meta.env.VITE_API_KEY
    const url = import.meta.env.VITE_URL_NEWS
    const [noticia, setNoticia] = useState(null)
    const { id } = useParams()

    useEffect(()=>{
        const fetchApi = async () => {
            
            Swal.fire({
                title: 'Carregando notícias',
                icon: 'info',
                showConfirmButton: false,
                allowOutsideClick: false
            })
            
            try {
                const res = await fetch(`${url}?ids=${id}`, {
                    method: 'GET',
                    headers: {'x-api-key': apiKey}
            
            })
                const data = await res.json()
            setNoticia(data.news[0]) 
            console.log(`${url}?ids=${id}`)
    Swal.close()
            
            } catch (err) {
            console.error(err.message)
            }
        }
        fetchApi()
    },[])

    return(
        <div>
            {
            noticia?
                <div>
                    <h2>{noticia?.title}</h2>
                    <p>{noticia?.authors}</p>
                    <img src={noticia?.image} alt="" />
                    <p>{noticia?.text}</p>
                </div>
            :
                <div>
                <h2>Notícia Indisponível</h2>
                </div>
            }
        </div>
    )
}