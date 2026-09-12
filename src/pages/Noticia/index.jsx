import { useState } from "react"
import { useParams } from "react-router-dom"

export const Noticia = () =>{
    const [noticia, setNoticia] = useState('')
    const { id } = useParams()
    return(
        <div>
            <h2>
                Notícia com o id {id}
            </h2>
        </div>
    )
}