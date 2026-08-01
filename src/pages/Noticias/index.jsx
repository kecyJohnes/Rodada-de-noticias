export const Noticias = () =>{

    const [noticias, setNoticias]=useState([])

    const apiKey='fc5cab5ccbc34b2e811b65e8870c16e5'
    const url = 'https://api.worldnewsapi.com/search-news?language=pt&source-country=br'

    const fetchApi = async () =>{
        try {
            const res = await fetch(url,{
            method:'GET',
            headers:{
                'x-api-key': apiKey
            }
           
            })
            const data = await res.json()
            console.log(data)
            setNoticias(data.news)

        } catch (err) {
            console.error(err.message)
        }
    }
        fetchApi()
    return(
        <div>
            <h2>Notícias 24 Horas</h2>
            <div>
                {noticias.news.map((noticia)=>{
                    return(
                        <div key={noticia.id}>
                            <p>{noticia.author}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}