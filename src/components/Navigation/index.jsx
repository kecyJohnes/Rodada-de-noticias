import { Link } from "react-router-dom"
import Style from './navigation.module.css'

export const NavigationBar = () => {
return(
    <nav className={Style.navigationBar}>
        <Link to='/'>Home</Link>
        <Link to='Noticias'>Notícias</Link>
    </nav>
)
}