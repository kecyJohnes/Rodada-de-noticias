import { Link } from "react-router-dom"

export const NavigationBar = () => {
return(
    <nav>
        <Link to='/'>Home</Link>
        <Link to='Noticias'>Notícias</Link>
    </nav>
)
}