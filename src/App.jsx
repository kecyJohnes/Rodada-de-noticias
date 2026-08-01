
import { Outlet } from 'react-router-dom'
import './App.css'
import { NavigationBar } from './components/Navigation'

function App() {


  return (
    <>
    <NavigationBar />
    <h1>Notícias App</h1>
    <Outlet />
    </>
  )
}

export default App
