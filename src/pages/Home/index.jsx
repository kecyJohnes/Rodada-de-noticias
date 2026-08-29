import { useEffect, useState } from "react"
import Style from './home.module.css'

export const Home = () =>{


    return(
        <div className={Style.container}>
            <h2>Rodada de Notícias</h2>
            <p>Todas as notícias do Brasil e do mundo em primeria mão!!</p>
            <section className={Style.section}>
                <article className={Style.article1}>article1</article>
                <article className={Style.article2}>article2</article>
            </section>
        </div>
    )
}